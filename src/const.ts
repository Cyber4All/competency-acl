export const ACL_REGEX = /^[a-zA-Z]+:[a-zA-Z]+:(([a-zA-Z]+|[*])|([a-zA-Z]+[*]))$/

enum SERVICES {
    competency = "competency",
}

enum MODULES {
    competencies = "competencies",
    audience = "audience",
    condition = "condition",
    documentation = "documentation",
    behavior = "behavior",
    degree = "degree",
    effectiveness = "effectiveness",
    user = "user",
    apiKey = "apiKey",
    search = "search",
    lifecycle = "lifecycle",
}

export const competencyAcl = {
    competencies: {
        wildcard: `${SERVICES.competency}:${MODULES.competencies}:*`,
        getWildcard: `${SERVICES.competency}:${MODULES.competencies}:get*`,
        getDraft: `${SERVICES.competency}:${MODULES.competencies}:getDraft`,
        getSubmitted: `${SERVICES.competency}:${MODULES.competencies}:getSubmitted`,
        getRejected: `${SERVICES.competency}:${MODULES.competencies}:getRejected`,
        getPublished: `${SERVICES.competency}:${MODULES.competencies}:getPublished`,
        getDeprecated: `${SERVICES.competency}:${MODULES.competencies}:getDeprecated`,
        deleteDraft: `${SERVICES.competency}:${MODULES.competencies}:deleteDraft`,
        create: `${SERVICES.competency}:${MODULES.competencies}:create`,
        version: `${SERVICES.competency}:${MODULES.competencies}:version`,
    },
    audience: {
        wildcard: `${SERVICES.competency}:${MODULES.audience}:*`,
        updateDraft: `${SERVICES.competency}:${MODULES.audience}:updateDraft`,
        updateSubmitted: `${SERVICES.competency}:${MODULES.audience}:updateSubmitted`
    },
    condition: {
        wildcard: `${SERVICES.competency}:${MODULES.condition}:*`,
        updateDraft: `${SERVICES.competency}:${MODULES.condition}:updateDraft`,
        updateSubmitted: `${SERVICES.competency}:${MODULES.condition}:updateSubmitted`
    },
    documentation: {
        wildcard: `${SERVICES.competency}:${MODULES.documentation}:*`,
        uploadDraft: `${SERVICES.competency}:${MODULES.documentation}:uploadDraft`,
        uploadSubmitted: `${SERVICES.competency}:${MODULES.documentation}:uploadSubmitted`,
        updateDraft: `${SERVICES.competency}:${MODULES.documentation}:updateDraft`,
        updateSubmitted: `${SERVICES.competency}:${MODULES.documentation}:updateSubmitted`
    },
    behavior: {
        wildcard: `${SERVICES.competency}:${MODULES.behavior}:*`,
        updateDraft: `${SERVICES.competency}:${MODULES.behavior}:updateDraft`,
        updateSubmitted: `${SERVICES.competency}:${MODULES.behavior}:updateSubmitted`
    },
    degree: {
        wildcard: `${SERVICES.competency}:${MODULES.degree}:*`,
        updateDraft: `${SERVICES.competency}:${MODULES.degree}:updateDraft`,
        updateSubmitted: `${SERVICES.competency}:${MODULES.degree}:updateSubmitted`
    },
    effectiveness: {
        wildcard: `${SERVICES.competency}:${MODULES.effectiveness}:*`,
        updateDraft: `${SERVICES.competency}:${MODULES.effectiveness}:updateDraft`,
        updateSubmitted: `${SERVICES.competency}:${MODULES.effectiveness}:updateSubmitted`
    },
    user: {
        wildcard: `${SERVICES.competency}:${MODULES.user}:*`,
        getUsers: `${SERVICES.competency}:${MODULES.user}:getUsers`,
        getProfile: `${SERVICES.competency}:${MODULES.user}:getProfile`,
        updateAccount: `${SERVICES.competency}:${MODULES.user}:updateAccount`,
        updateAcl: `${SERVICES.competency}:${MODULES.user}:updateAcl`,
        create: `${SERVICES.competency}:${MODULES.user}:create`
    },
    apiKey: {
        wildcard: `${SERVICES.competency}:${MODULES.apiKey}:*`,
        create: `${SERVICES.competency}:${MODULES.apiKey}:create`,
        delete: `${SERVICES.competency}:${MODULES.apiKey}:delete`,
        updateAcl: `${SERVICES.competency}:${MODULES.apiKey}:updateAcl`
    },
    search: {
        wildcard: `${SERVICES.competency}:${MODULES.search}:*`,
        published: `${SERVICES.competency}:${MODULES.search}:published`,
        rejected: `${SERVICES.competency}:${MODULES.search}:rejected`,
        submitted: `${SERVICES.competency}:${MODULES.search}:submitted`,
        draft: `${SERVICES.competency}:${MODULES.search}:draft`,
        deprecated: `${SERVICES.competency}:${MODULES.search}:deprecated`
    },
    lifecycle: {
        wildcard: `${SERVICES.competency}:${MODULES.lifecycle}:wildcard`,
        deprecate: `${SERVICES.competency}:${MODULES.lifecycle}:deprecate`,
        submit: `${SERVICES.competency}:${MODULES.lifecycle}:submit`,
        cancelSubmission: `${SERVICES.competency}:${MODULES.lifecycle}:cancelSubmission`,
        reject: `${SERVICES.competency}:${MODULES.lifecycle}:reject`,
        approve: `${SERVICES.competency}:${MODULES.lifecycle}:approve`,
        reviseRejected: `${SERVICES.competency}:${MODULES.lifecycle}:reviseRejected`
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
