export const ACL_REGEX =
	/^[a-zA-Z]+:[a-zA-Z]+:(([a-zA-Z]+|[*])|([a-zA-Z]+[*]))$/;

enum SERVICES {
	competency = "competency",
}

enum MODULES {
	competencies = "competencies",
	activity = "activity",
	name = "name",
	actor = "actor",
	condition = "condition",
	documentation = "documentation",
	behavior = "behavior",
	degree = "degree",
	employability = "employability",
	notes = "notes",
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
		reviewSubmitted: `${SERVICES.competency}:${MODULES.competencies}:reviewSubmitted`,
		create: `${SERVICES.competency}:${MODULES.competencies}:create`,
		version: `${SERVICES.competency}:${MODULES.competencies}:version`,
	},
	activity: {
		wildcard: `${SERVICES.competency}:${MODULES.activity}:*`,
		updateDraft: `${SERVICES.competency}:${MODULES.activity}:updateDraft`,
		updateSubmitted: `${SERVICES.competency}:${MODULES.activity}:updateSubmitted`,
	},
	name: {
		wildcard: `${SERVICES.competency}:${MODULES.name}:*`,
		updateDraft: `${SERVICES.competency}:${MODULES.name}:updateDraft`,
		updateSubmitted: `${SERVICES.competency}:${MODULES.name}:updateSubmitted`,
	},
	actor: {
		wildcard: `${SERVICES.competency}:${MODULES.actor}:*`,
		updateDraft: `${SERVICES.competency}:${MODULES.actor}:updateDraft`,
		updateSubmitted: `${SERVICES.competency}:${MODULES.actor}:updateSubmitted`,
	},
	condition: {
		wildcard: `${SERVICES.competency}:${MODULES.condition}:*`,
		updateDraft: `${SERVICES.competency}:${MODULES.condition}:updateDraft`,
		updateSubmitted: `${SERVICES.competency}:${MODULES.condition}:updateSubmitted`,
	},
	documentation: {
		wildcard: `${SERVICES.competency}:${MODULES.documentation}:*`,
		uploadDraft: `${SERVICES.competency}:${MODULES.documentation}:uploadDraft`,
		uploadSubmitted: `${SERVICES.competency}:${MODULES.documentation}:uploadSubmitted`,
		updateDraft: `${SERVICES.competency}:${MODULES.documentation}:updateDraft`,
		updateSubmitted: `${SERVICES.competency}:${MODULES.documentation}:updateSubmitted`,
	},
	behavior: {
		wildcard: `${SERVICES.competency}:${MODULES.behavior}:*`,
		updateDraft: `${SERVICES.competency}:${MODULES.behavior}:updateDraft`,
		updateSubmitted: `${SERVICES.competency}:${MODULES.behavior}:updateSubmitted`,
	},
	degree: {
		wildcard: `${SERVICES.competency}:${MODULES.degree}:*`,
		updateDraft: `${SERVICES.competency}:${MODULES.degree}:updateDraft`,
		updateSubmitted: `${SERVICES.competency}:${MODULES.degree}:updateSubmitted`,
	},
	employability: {
		wildcard: `${SERVICES.competency}:${MODULES.employability}:*`,
		updateDraft: `${SERVICES.competency}:${MODULES.employability}:updateDraft`,
		updateSubmitted: `${SERVICES.competency}:${MODULES.employability}:updateSubmitted`,
	},
	notes: {
		wildcard: `${SERVICES.competency}:${MODULES.notes}:*`,
		updateDraft: `${SERVICES.competency}:${MODULES.notes}:updateDraft`,
		updateSubmitted: `${SERVICES.competency}:${MODULES.notes}:updateSubmitted`,
	},
	user: {
		wildcard: `${SERVICES.competency}:${MODULES.user}:*`,
		getUsers: `${SERVICES.competency}:${MODULES.user}:getUsers`,
		getProfile: `${SERVICES.competency}:${MODULES.user}:getProfile`,
		updateAccount: `${SERVICES.competency}:${MODULES.user}:updateAccount`,
		updateAcl: `${SERVICES.competency}:${MODULES.user}:updateAcl`,
		create: `${SERVICES.competency}:${MODULES.user}:create`,
	},
	apiKey: {
		wildcard: `${SERVICES.competency}:${MODULES.apiKey}:*`,
		create: `${SERVICES.competency}:${MODULES.apiKey}:create`,
		delete: `${SERVICES.competency}:${MODULES.apiKey}:delete`,
		updateAcl: `${SERVICES.competency}:${MODULES.apiKey}:updateAcl`,
	},
	search: {
		wildcard: `${SERVICES.competency}:${MODULES.search}:*`,
		published: `${SERVICES.competency}:${MODULES.search}:published`,
		rejected: `${SERVICES.competency}:${MODULES.search}:rejected`,
		submitted: `${SERVICES.competency}:${MODULES.search}:submitted`,
		draft: `${SERVICES.competency}:${MODULES.search}:draft`,
		deprecated: `${SERVICES.competency}:${MODULES.search}:deprecated`,
	},
	lifecycle: {
		wildcard: `${SERVICES.competency}:${MODULES.lifecycle}:wildcard`,
		deprecate: `${SERVICES.competency}:${MODULES.lifecycle}:deprecate`,
		submit: `${SERVICES.competency}:${MODULES.lifecycle}:submit`,
		cancelSubmission: `${SERVICES.competency}:${MODULES.lifecycle}:cancelSubmission`,
		reject: `${SERVICES.competency}:${MODULES.lifecycle}:reject`,
		approve: `${SERVICES.competency}:${MODULES.lifecycle}:approve`,
		reviseRejected: `${SERVICES.competency}:${MODULES.lifecycle}:reviseRejected`,
	},
};

export const basic_user_permissions = [
	competencyAcl.competencies.getWildcard,
	competencyAcl.competencies.deleteDraft,
	competencyAcl.competencies.create,
	competencyAcl.activity.updateDraft,
	competencyAcl.name.updateDraft,
	competencyAcl.actor.updateDraft,
	competencyAcl.condition.updateDraft,
	competencyAcl.documentation.uploadDraft,
	competencyAcl.documentation.updateDraft,
	competencyAcl.behavior.updateDraft,
	competencyAcl.degree.updateDraft,
	competencyAcl.employability.updateDraft,
	competencyAcl.notes.updateDraft,
	competencyAcl.user.getProfile,
	competencyAcl.user.updateAccount,
	competencyAcl.search.wildcard,
	competencyAcl.lifecycle.submit,
	competencyAcl.lifecycle.cancelSubmission,
];

export const ADMIN_VIEWER = [
	competencyAcl.competencies.reviewSubmitted,
	competencyAcl.lifecycle.approve,
	competencyAcl.lifecycle.reject,
	competencyAcl.lifecycle.deprecate,
];

export const ADMIN_EDITOR = [
	competencyAcl.competencies.reviewSubmitted,
	competencyAcl.lifecycle.approve,
	competencyAcl.lifecycle.reject,
	competencyAcl.lifecycle.deprecate,
	competencyAcl.activity.updateSubmitted,
	competencyAcl.name.updateSubmitted,
	competencyAcl.actor.updateSubmitted,
	competencyAcl.behavior.updateSubmitted,
	competencyAcl.condition.updateSubmitted,
	competencyAcl.documentation.updateSubmitted,
	competencyAcl.degree.updateSubmitted,
	competencyAcl.employability.updateSubmitted,
	competencyAcl.notes.updateSubmitted,
];
