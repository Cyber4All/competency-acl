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
		getDeclined: `${SERVICES.competency}:${MODULES.competencies}:getDeclined`,
		getPublished: `${SERVICES.competency}:${MODULES.competencies}:getPublished`,
		getDeprecated: `${SERVICES.competency}:${MODULES.competencies}:getDeprecated`,
		deleteDraft: `${SERVICES.competency}:${MODULES.competencies}:deleteDraft`,
		getChangesRequested: `${SERVICES.competency}:${MODULES.competencies}:getChangesRequested`,
		reviewSubmitted: `${SERVICES.competency}:${MODULES.competencies}:reviewSubmitted`,
		create: `${SERVICES.competency}:${MODULES.competencies}:create`,
		version: `${SERVICES.competency}:${MODULES.competencies}:version`,
	},
	activity: {
		wildcard: `${SERVICES.competency}:${MODULES.activity}:*`,
		updateDraft: `${SERVICES.competency}:${MODULES.activity}:updateDraft`,
		updateSubmitted: `${SERVICES.competency}:${MODULES.activity}:updateSubmitted`,
		updateChangesRequested: `${SERVICES.competency}:${MODULES.activity}:updateChangesRequested`
	},
	name: {
		wildcard: `${SERVICES.competency}:${MODULES.name}:*`,
		updateDraft: `${SERVICES.competency}:${MODULES.name}:updateDraft`,
		updateSubmitted: `${SERVICES.competency}:${MODULES.name}:updateSubmitted`,
		updateChangesRequested: `${SERVICES.competency}:${MODULES.name}:updateChangesRequested`
	},
	actor: {
		wildcard: `${SERVICES.competency}:${MODULES.actor}:*`,
		updateDraft: `${SERVICES.competency}:${MODULES.actor}:updateDraft`,
		updateSubmitted: `${SERVICES.competency}:${MODULES.actor}:updateSubmitted`,
		updateChangesRequested: `${SERVICES.competency}:${MODULES.actor}:updateChangesRequested`
	},
	condition: {
		wildcard: `${SERVICES.competency}:${MODULES.condition}:*`,
		updateDraft: `${SERVICES.competency}:${MODULES.condition}:updateDraft`,
		updateSubmitted: `${SERVICES.competency}:${MODULES.condition}:updateSubmitted`,
		updateChangesRequested: `${SERVICES.competency}:${MODULES.condition}:updateChangesRequested`
	},
	documentation: {
		wildcard: `${SERVICES.competency}:${MODULES.documentation}:*`,
		uploadDraft: `${SERVICES.competency}:${MODULES.documentation}:uploadDraft`,
		uploadSubmitted: `${SERVICES.competency}:${MODULES.documentation}:uploadSubmitted`,
		updateDraft: `${SERVICES.competency}:${MODULES.documentation}:updateDraft`,
		updateSubmitted: `${SERVICES.competency}:${MODULES.documentation}:updateSubmitted`,
		updateChangesRequested: `${SERVICES.competency}:${MODULES.documentation}:updateChangesRequested`
	},
	behavior: {
		wildcard: `${SERVICES.competency}:${MODULES.behavior}:*`,
		updateDraft: `${SERVICES.competency}:${MODULES.behavior}:updateDraft`,
		updateSubmitted: `${SERVICES.competency}:${MODULES.behavior}:updateSubmitted`,
		updateChangesRequested: `${SERVICES.competency}:${MODULES.behavior}:updateChangesRequested`
	},
	degree: {
		wildcard: `${SERVICES.competency}:${MODULES.degree}:*`,
		updateDraft: `${SERVICES.competency}:${MODULES.degree}:updateDraft`,
		updateSubmitted: `${SERVICES.competency}:${MODULES.degree}:updateSubmitted`,
		updateChangesRequested: `${SERVICES.competency}:${MODULES.degree}:updateChangesRequested`
	},
	employability: {
		wildcard: `${SERVICES.competency}:${MODULES.employability}:*`,
		updateDraft: `${SERVICES.competency}:${MODULES.employability}:updateDraft`,
		updateSubmitted: `${SERVICES.competency}:${MODULES.employability}:updateSubmitted`,
		updateChangesRequested: `${SERVICES.competency}:${MODULES.employability}:updateChangesRequested`
	},
	notes: {
		wildcard: `${SERVICES.competency}:${MODULES.notes}:*`,
		updateDraft: `${SERVICES.competency}:${MODULES.notes}:updateDraft`,
		updateSubmitted: `${SERVICES.competency}:${MODULES.notes}:updateSubmitted`,
		updateChangesRequested: `${SERVICES.competency}:${MODULES.notes}:updateChangesRequested`
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
		declined: `${SERVICES.competency}:${MODULES.search}:declined`,
		submitted: `${SERVICES.competency}:${MODULES.search}:submitted`,
		draft: `${SERVICES.competency}:${MODULES.search}:draft`,
		deprecated: `${SERVICES.competency}:${MODULES.search}:deprecated`,
		changesRequested: `${SERVICES.competency}:${MODULES.search}:changesRequested`
	},
	lifecycle: {
		wildcard: `${SERVICES.competency}:${MODULES.lifecycle}:wildcard`,
		deprecate: `${SERVICES.competency}:${MODULES.lifecycle}:deprecate`,
		submit: `${SERVICES.competency}:${MODULES.lifecycle}:submit`,
		cancelSubmission: `${SERVICES.competency}:${MODULES.lifecycle}:cancelSubmission`,
		decline: `${SERVICES.competency}:${MODULES.lifecycle}:decline`,
		approve: `${SERVICES.competency}:${MODULES.lifecycle}:approve`,
		changesRequested: `${SERVICES.competency}:${MODULES.lifecycle}:changesRequested`,
		reviseDeclined: `${SERVICES.competency}:${MODULES.lifecycle}:reviseDeclined`,
		reviseChangesRequested: `${SERVICES.competency}:${MODULES.lifecycle}:reviseChangesRequested`
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
	competencyAcl.lifecycle.reviseChangesRequested,
	competencyAcl.lifecycle.changesRequested,
	competencyAcl.activity.updateChangesRequested,
	competencyAcl.name.updateChangesRequested,
	competencyAcl.actor.updateChangesRequested,
	competencyAcl.behavior.updateChangesRequested,
	competencyAcl.condition.updateChangesRequested,
	competencyAcl.degree.updateChangesRequested,
	competencyAcl.documentation.updateChangesRequested,
	competencyAcl.notes.updateChangesRequested,
	competencyAcl.lifecycle.reviseRejected
];

export const ADMIN_VIEWER = [
	competencyAcl.competencies.reviewSubmitted,
	competencyAcl.lifecycle.approve,
	competencyAcl.lifecycle.decline,
	competencyAcl.lifecycle.deprecate,
	competencyAcl.lifecycle.reviseChangesRequested
];

export const ADMIN_EDITOR = [
	competencyAcl.competencies.reviewSubmitted,
	competencyAcl.lifecycle.approve,
	competencyAcl.lifecycle.decline,
	competencyAcl.lifecycle.deprecate,
	competencyAcl.lifecycle.changesRequested,
	competencyAcl.activity.updateSubmitted,
	competencyAcl.name.updateSubmitted,
	competencyAcl.actor.updateSubmitted,
	competencyAcl.behavior.updateSubmitted,
	competencyAcl.condition.updateSubmitted,
	competencyAcl.documentation.updateSubmitted,
	competencyAcl.degree.updateSubmitted,
	competencyAcl.employability.updateSubmitted,
	competencyAcl.notes.updateSubmitted,
	competencyAcl.name.updateSubmitted,
	competencyAcl.activity.updateSubmitted,
	competencyAcl.user.getUsers,
	competencyAcl.activity.updateChangesRequested,
	competencyAcl.name.updateChangesRequested,
	competencyAcl.actor.updateChangesRequested,
	competencyAcl.behavior.updateChangesRequested,
	competencyAcl.condition.updateChangesRequested,
	competencyAcl.degree.updateChangesRequested,
	competencyAcl.employability.updateChangesRequested,
	competencyAcl.notes.updateChangesRequested
];
