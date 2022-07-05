const ACL_REGEX = /^[a-zA-Z]+:([a-zA-Z]+|[*]):(([a-zA-Z]+|[*])|([a-zA-Z]+[*]))$/

/**
 * Competency Service Acl 
 * Will contain ACLs that for: competency:*:*
 */
const competencyPrefix = "competency:competencies";
const audiencePrefix = "competency:audience";
export const competencyAcl = {
    competencies: {
        wildcard: `${competencyPrefix}:*`,
        getReleased: `${competencyPrefix}:getReleased`,
        getUnreleased: `${competencyPrefix}:getUnreleased`,
        getWildcard: `${competencyPrefix}:get*`,
        createCompetency: `${competencyPrefix}:createCompetency`,
    },
    audience: {
        wildcard: `${audiencePrefix}:*`,
    }
    
}

/**
 * 
 * @param acl 
 * @returns 
 */
export function validateAclString(acl: string): boolean {
    if (acl.match(ACL_REGEX) === null) {
        return false;
    }
    const aclArray = acl.split(":");
    const service = aclArray[0];
    const module = aclArray[1];
    const action = aclArray[2];

    switch(service) {
        case "competency":
            return validateCompetencyAcl(module, action);
        default:
            return false;
    }
}

/**
 * 
 * @param module 
 * @param action 
 * @returns 
 */
function validateCompetencyAcl(module: string, action: string): boolean {
    switch(module) {
        case "competencies":
            for (const comp in competencyAcl.competencies) {
                if (Object.prototype.hasOwnProperty.call(competencyAcl.competencies, comp)) {
                    const element = competencyAcl.competencies[comp].split(":")[2];
                    if (action === element) {
                        return true;
                    }
                }
            }
            return false;
        case "audience":
            for (const comp in competencyAcl.audience) {
                if (Object.prototype.hasOwnProperty.call(competencyAcl.audience, comp)) {
                    const element = competencyAcl.audience[comp].split(":")[2];
                    if (action === element) {
                        return true;
                    }
                }
            }
            return false;
        default:
            return false;
    }
}