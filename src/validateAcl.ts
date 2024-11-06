import { ACL_REGEX, competencyAcl } from "./const";
import { ActionMismatchError, ActionNotSupportedError, ServiceNotSupportedError } from "./error";

export interface ValidationOptions {
	/**
	 * If set to true, the function will throw an error if the acl is invalid
	 */
	throwOnError?: boolean;
}

/**
 * Default options for the validateAclArray function
 */
const defaultValidationOptions: ValidationOptions = {
	throwOnError: true,
};

/**
 * Validate an Array of acls by ensuring each acl matches the regex and is a valid action.
 * The returned array will contain all duplicates removed and all wilcard acls expanded
 * @param acl A list of acls
 * @param options Options for the validation
 * @returns An expanded list of acls
 */
export function validateAclArray(acl: string[], options: ValidationOptions = defaultValidationOptions): string[] {
	acl = removeDuplicateAcls(acl);
	let fullAcl: string[] = [];
	acl.forEach((anAcl) => {
		try {
			const res = validateAcl(anAcl);
			fullAcl = fullAcl.concat(res);
		} catch (error) {
			// If a user has many actions in the acl array, we don't want to throw an error for one being
			// invalid. Rather, we want to just return the valid acls 
			if (options.throwOnError) {
				throw error;
			}
		}
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
		throw new ActionMismatchError("The ACL string is not formatted correctly");
	}
	const aclArray = acl.split(":");
	const service = aclArray[0];
	const module = aclArray[1];
	const permission = aclArray[2];

	switch (service) {
		case "competency":
			return validateCompetencyAcl(module, permission, acl);
		default:
			throw new ServiceNotSupportedError("Service does not exist");
	}
}

/**
 * Condense an array of permissions
 * @param acl The acl array to condense down
 * @returns A string of acls where acls were removed and replaced with a wildcard
 */
export function condenseAcl(acl: string[]): string[] {
	// Validate list
	acl = validateAclArray(acl);

	let condensed: string[] = [];

	// Check for full wildcards. ie competency:competencies:*
	Object.entries(competencyAcl).forEach((value) => {
		const module = value[0];
		const permissions = Object.values(value[1]).filter((permission) => {
			return !permission.includes("*");
		});

		const hasAllModuleAcl = permissions.every((action) => {
			return acl.includes(action);
		});

		if (hasAllModuleAcl) {
			condensed.push(`competency:${module}:*`);
			// Remove acls from the original list
			acl = acl.filter((value) => !value.includes(module));
		}
	});

	// Check for get wildcards. ie competency:competencies:get*
	Object.entries(competencyAcl).forEach((value) => {
		const module = value[0];
		const getPermissions = Object.values(value[1]).filter((permission) => {
			const action = permission.split(":")[2];
			return action.startsWith("get") && !action.includes("*");
		});
		const hasAllGetAcls =
			getPermissions.length !== 0 &&
			getPermissions.every((action) => acl.includes(action));

		if (hasAllGetAcls && Object.keys(value[1]).includes("getWildcard")) {
			condensed.push(`competency:${module}:get*`);
			// Remove get acls from the original list
			acl = acl.filter((value) => {
				const brokenAcl = value.split(":");
				return brokenAcl[1] !== module || !brokenAcl[2].startsWith("get");
			});
		}
	});

	// Add the permissions that did not get reduced to wildcards
	condensed = condensed.concat(acl);

	return condensed;
}

/**
 * Breaks down a given wildcard to the permissions that the wildcard encapsulates
 * @param module The module of the acl
 * @param permission The permission of the acl
 * @returns A string array of the permissions that the wildcard contains
 * @throws ValidationError if the module or permission are not valid
 */
function decomposeWildcard(
	module: string,
	permission: string,
): string[] {
	const expanded: string[] = [];

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
		const prefix = permission.slice(0, permission.length - 1);
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
		throw new ActionNotSupportedError(`${module}:${permission} is not a valid action.`);
	}
	return expanded;
}

/**
 * Validates an acl within the competency service
 * @param module The module within the competency service
 * @param permission The permission relating to the module
 * @returns A string array
 */
function validateCompetencyAcl(
	module: string,
	permission: string,
	fullAcl: string
): string[] {
	let aclList: string[] = [];

	if (permission.includes("*")) {
		aclList = aclList.concat(decomposeWildcard(module, permission));
		return aclList;
	}

	Object.entries(competencyAcl).forEach((compAcl) => {
		const moduleName = compAcl[0];
		if (moduleName === module) {
			// TODO: This can be optimized by quick exiting the forEach once the permission is found.
			// Currently it will continue to iterate through the rest of the permissions in the module
			// even if the first permission checked is the correct one.
			Object.entries(compAcl[1]).forEach((keyPair) => {
				if (keyPair[0] === permission) {
					aclList.push(keyPair[1]);
				}
			});
		}
	});

	if (aclList.length === 0) {
		throw new ActionNotSupportedError(`${fullAcl} is not a valid acl.`);
	}

	return aclList;
}

/**
 * Remove all the duplicates from an acl array
 * @param acl Acl list
 * @returns An acl with potential duplicates removed
 */
function removeDuplicateAcls(acl: string[]): string[] {
	return acl.length !== 0 ? Array.from(new Set(acl)) : [];
}
