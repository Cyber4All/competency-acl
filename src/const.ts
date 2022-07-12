export const ACL_REGEX = /^[a-zA-Z]+:[a-zA-Z]+:(([a-zA-Z]+|[*])|([a-zA-Z]+[*]))$/

const competencyService = "competency";

const competenciesModule = "competencies";
const audienceModule = "audience";
const conditionModule = "condition";
const documentationModule = "documentation";
const behaviorModule = "behavior";
const degreeModule = "degree";
const effectivenessModule = "effectiveness";
const userModule = "user";
const apiKeyModule = "apiKey";
const searchModule = "search";
const lifecycleModule = "lifecycle";

export const competencyAcl = {
    competencies: {
        wildcard: `${competencyService}:${competenciesModule}:*`,
        getWildcard: `${competencyService}:${competenciesModule}:get*`,
        getDraft: `${competencyService}:${competenciesModule}:getDraft`,
        getSubmitted: `${competencyService}:${competenciesModule}:getSubmitted`,
        getRejected: `${competencyService}:${competenciesModule}:getRejected`,
        getPublished: `${competencyService}:${competenciesModule}:getPublished`,
        getDeprecated: `${competencyService}:${competenciesModule}:getDeprecated`,
        deleteDraft: `${competencyService}:${competenciesModule}:deleteDraft`,
        create: `${competencyService}:${competenciesModule}:create`,
        version: `${competencyService}:${competenciesModule}:version`,
    },
    audience: {
        wildcard: `${competencyService}:${audienceModule}:*`,
        updateDraft: `${competencyService}:${audienceModule}:updateDraft`,
        updateSubmitted: `${competencyService}:${audienceModule}:updateSubmitted`
    },
    condition: {
        wildcard: `${competencyService}:${conditionModule}:*`,
        updateDraft: `${competencyService}:${conditionModule}:updateDraft`,
        updateSubmitted: `${competencyService}:${conditionModule}:updateSubmitted`
    },
    documentation: {
        wildcard: `${competencyService}:${documentationModule}:*`,
        uploadDraft: `${competencyService}:${documentationModule}:uploadDraft`,
        uploadSubmitted: `${competencyService}:${documentationModule}:uploadSubmitted`,
        updateDraft: `${competencyService}:${documentationModule}:updateDraft`,
        updateSubmitted: `${competencyService}:${documentationModule}:updateSubmitted`
    },
    behavior: {
        wildcard: `${competencyService}:${behaviorModule}:*`,
        updateDraft: `${competencyService}:${behaviorModule}:updateDraft`,
        updateSubmitted: `${competencyService}:${behaviorModule}:updateSubmitted`
    },
    degree: {
        wildcard: `${competencyService}:${degreeModule}:*`,
        updateDraft: `${competencyService}:${degreeModule}:updateDraft`,
        updateSubmitted: `${competencyService}:${degreeModule}:updateSubmitted`
    },
    effectiveness: {
        wildcard: `${competencyService}:${effectivenessModule}:*`,
        updateDraft: `${competencyService}:${effectivenessModule}:updateDraft`,
        updateSubmitted: `${competencyService}:${effectivenessModule}:updateSubmitted`
    },
    user: {
        wildcard: `${competencyService}:${userModule}:*`,
        getUsers: `${competencyService}:${userModule}:getUsers`,
        getProfile: `${competencyService}:${userModule}:getProfile`,
        updateAccount: `${competencyService}:${userModule}:updateAccount`,
        updateAcl: `${competencyService}:${userModule}:updateAcl`,
        create: `${competencyService}:${userModule}:create`
    },
    apiKey: {
        wildcard: `${competencyService}:${apiKeyModule}:*`,
        create: `${competencyService}:${apiKeyModule}:create`,
        delete: `${competencyService}:${apiKeyModule}:delete`,
        updateAcl: `${competencyService}:${apiKeyModule}:updateAcl`
    },
    search: {
        wildcard: `${competencyService}:${searchModule}:*`,
        published: `${competencyService}:${searchModule}:published`,
        rejected: `${competencyService}:${searchModule}:rejected`,
        submitted: `${competencyService}:${searchModule}:submitted`,
        draft: `${competencyService}:${searchModule}:draft`,
        deprecated: `${competencyService}:${searchModule}:deprecated`
    },
    lifecycle: {
        wildcard: `${competencyService}:${lifecycleModule}:wildcard`,
        deprecate: `${competencyService}:${lifecycleModule}:deprecate`,
        submit: `${competencyService}:${lifecycleModule}:submit`,
        cancelSubmission: `${competencyService}:${lifecycleModule}:cancelSubmission`,
        reject: `${competencyService}:${lifecycleModule}:reject`,
        approve: `${competencyService}:${lifecycleModule}:approve`,
        reviseRejected: `${competencyService}:${lifecycleModule}:reviseRejected`
    }
    
};

export const basic_user_permissions = [
    competencyAcl.competencies.getWildcard,
    competencyAcl.competencies.deleteDraft,
    competencyAcl.competencies.create,
    competencyAcl.audience.updateDraft,
    competencyAcl.condition.updateDraft,
    competencyAcl.documentation.uploadDraft,
    competencyAcl.documentation.updateDraft,
    competencyAcl.behavior.updateDraft,
    competencyAcl.degree.updateDraft,
    competencyAcl.effectiveness.updateDraft,
    competencyAcl.user.getProfile,
    competencyAcl.user.updateAccount,
    competencyAcl.search.wildcard,
    competencyAcl.lifecycle.submit,
    competencyAcl.lifecycle.cancelSubmission
];
