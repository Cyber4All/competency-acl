import { ACL_REGEX, competencyAcl } from "./competencyAcl";
import { ValidationError } from "./error";

/**
 * Breaks down a given wildcard to the permissions that the wildcard encapsulates
 * @param module The module of the acl
 * @param permission The permission of the acl
 * @returns A string array of the permissions that the wildcard contains
 * @throws ValidationError if the module or permission are not valid
 */
function decomposeWildcard(module: string, permission: string, fullAcl?: string): string[] {
    let expanded: string[] = [];

    // Has all permissions in the module
    if (permission === "*") {
        Object.entries(competencyAcl).forEach((value) => {
            if (value[0] === module) {
                Object.values(value[1]).forEach((acl) => {
                    if (!acl.includes("*")) {
                        expanded.push(acl);
                    }
                });
            }
        });
    } else if (permission.endsWith("*")) {
        const prefix = permission.slice(0, permission.length -1);
        Object.entries(competencyAcl).forEach((value) => {
            const aModule = value[0];
            if (aModule === module) {
                Object.entries(value[1]).forEach((acl) => {
                    const key = acl[0];
                    const value = acl[1];
                    if (key.startsWith(prefix) && !value.includes("*")) {
                        expanded.push(value);
                    }
                });
            }
        });
    }

    if (expanded.length === 0) {
        const msg = fullAcl ? `${fullAcl} is not a valid acl` : `${module} or ${permission} are not valid`;
        throw new ValidationError(msg);
    }
    return expanded;
}

/**
 * Validate an Array of acls
 * @param acl A list of acls
 * @returns An expanded list of acls
 */
export function validateAclArray(acl: string[]): string[] {
    let fullAcl: string[] = [];
    acl.forEach((anAcl) => {
        const res = validateAcl(anAcl);
        fullAcl = fullAcl.concat(res);
    });
    return fullAcl;
}

/**
 * Validate an acl string
 * @param acl The acl string to validate
 * @returns A string array
 * @throws ValidationError if the Acl string is not formatted correctly or the acl string is not in our system
 */
export function validateAcl(acl: string): string[] {
    if (acl.match(ACL_REGEX) === null) {
        throw new ValidationError("The ACL string is not formatted correctly");
    }
    const aclArray = acl.split(":");
    const service = aclArray[0];
    const module = aclArray[1];
    const permission = aclArray[2];

    switch(service) {
        case "competency":
            return validateCompetencyAcl(module, permission, acl);
        default:
            throw new ValidationError("Service does not exist");
    }
}


/**
 * Validates an acl within the competency service
 * @param module The module within the competency service
 * @param permission The permission relating to the module
 * @returns A string array
 */
function validateCompetencyAcl(module: string, permission: string, fullAcl: string): string[] {
    let aclList: string[] = [];

    if (permission.includes("*")) {
        aclList = aclList.concat(decomposeWildcard(module, permission));
        return aclList;
    }

    Object.entries(competencyAcl).forEach((compAcl) => {
        const moduleName = compAcl[0];
        if (moduleName === module) {
            Object.entries(compAcl[1]).forEach((keyPair) => {
                if(keyPair[0] === permission) {
                    aclList.push(keyPair[1]);
                }
            });
        }
    });

    if (aclList.length === 0) {
        throw new ValidationError(`${fullAcl} is not a valid acl.`);
    }

    return aclList;
}
