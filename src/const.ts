export const ACL_REGEX = /^[a-zA-Z]+:([a-zA-Z]+|[*]):(([a-zA-Z]+|[*])|([a-zA-Z]+[*]))$/

const competencyPrefix = "competency:competencies";
const audiencePrefix = "competency:audience";
const conditionPrefix = "competency:condition";
const documentationPrefix = "competency:documentation";
const behaviorPrefix = "competency:behavior";
const degreePrefix = "competency:degree";
const effectivenessPrefix = "competency:effectiveness";
const userPrefix = "competency:user";
const apiKeyPrefix = "competency:apiKey";
const searchPrefix = "competency:search";
const lifecyclePrefix = "competency:lifecycle";

export const competencyAcl = {
    competencies: {
        wildcard: `${competencyPrefix}:*`,
        getWildcard: `${competencyPrefix}:get*`,
        getSubmitted: `${competencyPrefix}:getSubmitted`,
        getRejected: `${competencyPrefix}:getRejected`,
        getPublished: `${competencyPrefix}:getPublished`,
        getDeprecated: `${competencyPrefix}:getDeprecated`,
        deleteDraft: `${competencyPrefix}:deleteDraft`,
        create: `${competencyPrefix}:create`,
        version: `${competencyPrefix}:version`,
    },
    audience: {
        wildcard: `${audiencePrefix}:*`,
        updateDraft: `${audiencePrefix}:updateDraft`,
        updateSubmitted: `${audiencePrefix}:updateSubmitted`
    },
    condition: {
        wildcard: `${conditionPrefix}:*`,
        updateDraft: `${conditionPrefix}:updateDraft`,
        updateSubmitted: `${conditionPrefix}:updateSubmitted`
    },
    documentation: {
        wildcard: `${documentationPrefix}:*`,
        uploadDraft: `${documentationPrefix}:uploadDraft`,
        uploadSubmitted: `${documentationPrefix}:uploadSubmitted`,
        updateDraft: `${documentationPrefix}:updateDraft`,
        updateSubmitted: `${documentationPrefix}:updateSubmitted`
    },
    behavior: {
        wildcard: `${behaviorPrefix}:*`,
        updateDraft: `${behaviorPrefix}:updateDraft`,
        updateSubmitted: `${behaviorPrefix}:updateSubmitted`
    },
    degree: {
        wildcard: `${degreePrefix}:*`,
        updateDraft: `${degreePrefix}:updateDraft`,
        updateSubmitted: `${degreePrefix}:updateSubmitted`
    },
    effectiveness: {
        wildcard: `${effectivenessPrefix}:*`,
        updateDraft: `${effectivenessPrefix}:updateDraft`,
        updateSubmitted: `${effectivenessPrefix}:updateSubmitted`
    },
    user: {
        wildcard: `${userPrefix}:*`,
        get: `${userPrefix}:get`,
        updateAccount: `${userPrefix}:updateAccount`,
        updateAcl: `${userPrefix}:updateAcl`,
        create: `${userPrefix}:create`
    },
    apiKey: {
        wildcard: `${apiKeyPrefix}:*`,
        create: `${apiKeyPrefix}:create`,
        delete: `${apiKeyPrefix}:delete`,
        updateAcl: `${apiKeyPrefix}:updateAcl`
    },
    search: {
        published: `${searchPrefix}:published`,
        rejected: `${searchPrefix}:rejected`,
        submitted: `${searchPrefix}:submitted`,
        draft: `${searchPrefix}:draft`,
        deprecated: `${searchPrefix}:deprecated`
    },
    lifecycle: {
        deprecate: `${lifecyclePrefix}:deprecate`,
        submit: `${lifecyclePrefix}:submit`,
        cancelSubmission: `${lifecyclePrefix}:cancelSubmission`,
        reject: `${lifecyclePrefix}:reject`,
        approve: `${lifecyclePrefix}:approve`,
        reviseRejected: `${lifecyclePrefix}:reviseRejected`

    }
    
};
