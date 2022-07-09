import { competencyAcl } from "../const";
import { validateAcl, validateAclArray } from "../validateAcl";

const invalidAcls = {
    containsNumbers: "notAvali:dacl1:*",
    notFormattedCorrectly: "Not!formatedCorrectly.",
    almostCorrect: "Iam:almost:*correct",
    incorrectCompAction: "competency:competencies:getAll",
    incorrectModule: "competency:services:get*",
    incorrectService: "hello:competencies:get*",
    incorrectAudienceAction: "competency:audience:getAll",
}

const competencyWildcard = [
    competencyAcl.competencies.create,
    competencyAcl.competencies.deleteDraft,
    competencyAcl.competencies.getDeprecated,
    competencyAcl.competencies.getPublished,
    competencyAcl.competencies.getRejected,
    competencyAcl.competencies.getSubmitted,
    competencyAcl.competencies.getDraft,
    competencyAcl.competencies.version
];

const competencyGetWildcard = [
    competencyAcl.competencies.getDeprecated,
    competencyAcl.competencies.getPublished,
    competencyAcl.competencies.getRejected,
    competencyAcl.competencies.getSubmitted,
    competencyAcl.competencies.getDraft
]

describe("Validate Invalid Acls", () => {
    it(`Should throw an error because format of ${invalidAcls.containsNumbers} is invalid`, () => {
        expect(() => validateAcl(invalidAcls.containsNumbers)).toThrowError();
    });

    it(`Should throw an error because format of ${invalidAcls.notFormattedCorrectly} is invalid`, () => {
        expect(() => validateAcl(invalidAcls.notFormattedCorrectly)).toThrowError();
    });

    it(`Should throw an error because format of ${invalidAcls.almostCorrect} is invalid`, () => {
        expect(() => validateAcl(invalidAcls.almostCorrect)).toThrowError();
    });

    it(`Should throw an error because ${invalidAcls.incorrectCompAction} has an incorrect action`, () => {
        expect(() => validateAcl(invalidAcls.incorrectCompAction)).toThrowError();
    });

    it(`Should throw an error because ${invalidAcls.incorrectModule} has an incorrect module`, () => {
        expect(() => validateAcl(invalidAcls.incorrectModule)).toThrowError();
    });

    it(`Should throw an error because ${invalidAcls.incorrectService} has an incorrect service`, () => {
        expect(() => validateAcl(invalidAcls.incorrectService)).toThrowError();
    });

    it(`Should throw an error because ${invalidAcls.incorrectAudienceAction} has an incorrect action`, () => {
        expect(() => validateAcl(invalidAcls.incorrectAudienceAction)).toThrowError();
    })
});

describe("Validate Valid Acls", () => {
    it(`Should return an array for ${competencyAcl.competencies.create}`, () => {
        expect(validateAcl(competencyAcl.competencies.create)).toEqual([competencyAcl.competencies.create]);
    });
    it(`Should return an array for ${competencyAcl.audience.wildcard}`, () => {
        expect(new Set(validateAcl(competencyAcl.audience.wildcard))).toEqual(new Set([
            competencyAcl.audience.updateDraft,
            competencyAcl.audience.updateSubmitted
        ]));
    });
    it(`Should return an array for ${competencyAcl.competencies.wildcard}`, () => {
        expect(new Set(validateAcl(competencyAcl.competencies.wildcard))).toEqual(new Set(competencyWildcard));
    });
    it(`Should return an array for ${competencyAcl.competencies.getWildcard}`, () => {
        expect(new Set(validateAcl(competencyAcl.competencies.getWildcard))).toEqual(new Set(competencyGetWildcard));
    });
});

describe("Validate Arrays of Acls", () => {
    it(`Should throw an error because the array contains an invalid acl`, () => {
        expect(() => validateAclArray([
            competencyAcl.apiKey.create,
            competencyAcl.competencies.create,
            competencyAcl.degree.updateDraft,
            "competency:competencies:HelloThere"
        ])).toThrowError();
    });
    it(`Should return an array that matches the array given`, () => {
        const aclArray = [
            competencyAcl.apiKey.create,
            competencyAcl.competencies.deleteDraft,
            competencyAcl.degree.updateDraft,
            competencyAcl.user.getProfile
        ];
        expect(new Set(validateAclArray(aclArray))).toEqual(new Set(aclArray));
    });
    it(`Should return an array that expands wildcards`, () => {
        const aclArray = [
            competencyAcl.competencies.getWildcard,
            competencyAcl.audience.wildcard,
            competencyAcl.condition.updateDraft,
            competencyAcl.search.rejected
        ];
        expect(new Set(validateAclArray(aclArray))).toEqual(new Set(competencyGetWildcard.concat([
            competencyAcl.audience.updateDraft, 
            competencyAcl.audience.updateSubmitted,
            competencyAcl.condition.updateDraft,
            competencyAcl.search.rejected
        ])));
    });
})