import { competencyAcl } from "../const";
import { condenseAcl, validateAcl, validateAclArray } from "../validateAcl";

const invalidAcls = {
    containsNumbers: "notAvali:dacl1:*",
    notFormattedCorrectly: "Not!formatedCorrectly.",
    almostCorrect: "Iam:almost:*correct",
    incorrectCompAction: "competency:competencies:getAll",
    incorrectModule: "competency:services:get*",
    incorrectService: "hello:competencies:get*",
    incorrectActorAction: "competency:actor:getAll",
}

const competencyWildcard = [
    competencyAcl.competencies.create,
    competencyAcl.competencies.deleteDraft,
    competencyAcl.competencies.getDeprecated,
    competencyAcl.competencies.getPublished,
    competencyAcl.competencies.getRejected,
    competencyAcl.competencies.getSubmitted,
    competencyAcl.competencies.getDraft,
    competencyAcl.competencies.version,
    competencyAcl.competencies.reviewSubmitted
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

    it(`Should throw an error because ${invalidAcls.incorrectActorAction} has an incorrect action`, () => {
        expect(() => validateAcl(invalidAcls.incorrectActorAction)).toThrowError();
    })
});

describe("Validate Valid Acls", () => {
    it(`Should return an array for ${competencyAcl.competencies.create}`, () => {
        expect(validateAcl(competencyAcl.competencies.create)).toEqual([competencyAcl.competencies.create]);
    });
    it(`Should return an array for ${competencyAcl.actor.wildcard}`, () => {
        expect(new Set(validateAcl(competencyAcl.actor.wildcard))).toEqual(new Set([
            competencyAcl.actor.updateDraft,
            competencyAcl.actor.updateSubmitted
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
    it("Should throw an error because the array contains an invalid acl", () => {
        expect(() => validateAclArray([
            competencyAcl.apiKey.create,
            competencyAcl.competencies.create,
            competencyAcl.degree.updateDraft,
            "competency:competencies:HelloThere"
        ])).toThrowError();
    });
    it("Should return an array that matches the array given", () => {
        const aclArray = [
            competencyAcl.apiKey.create,
            competencyAcl.competencies.deleteDraft,
            competencyAcl.degree.updateDraft,
            competencyAcl.user.getProfile
        ];
        expect(new Set(validateAclArray(aclArray))).toEqual(new Set(aclArray));
    });
    it("Should return an array that expands wildcards", () => {
        const aclArray = [
            competencyAcl.competencies.getWildcard,
            competencyAcl.actor.wildcard,
            competencyAcl.condition.updateDraft,
            competencyAcl.search.rejected
        ];
        expect(new Set(validateAclArray(aclArray))).toEqual(new Set(competencyGetWildcard.concat([
            competencyAcl.actor.updateDraft, 
            competencyAcl.actor.updateSubmitted,
            competencyAcl.condition.updateDraft,
            competencyAcl.search.rejected
        ])));
    });
    it("Should return an array with duplicates removed", () => {
        const duplicates = [
            competencyAcl.competencies.create,
            competencyAcl.competencies.create,
            competencyAcl.apiKey.create,
            competencyAcl.apiKey.create,
            competencyAcl.behavior.updateDraft,
            competencyAcl.behavior.updateDraft,
        ];
        const correct = [
            competencyAcl.competencies.create,
            competencyAcl.apiKey.create,
            competencyAcl.behavior.updateDraft
        ];
        expect(validateAclArray(duplicates).sort()).toEqual(correct.sort());
    });
    it("Should return an empty array given an empty array", () => {
        expect(validateAclArray([])).toEqual([]);
    });
});

describe("Condense an Array of Acls", () => {
    let aclArray: string[];
    let correctArray: string[];
    let additional: string[];

    beforeEach(() => {
        aclArray = [
            competencyAcl.apiKey.create,
            competencyAcl.apiKey.delete,
            competencyAcl.apiKey.updateAcl,
            competencyAcl.actor.updateDraft,
            competencyAcl.actor.updateSubmitted,
            competencyAcl.behavior.updateDraft,
            competencyAcl.behavior.updateSubmitted
        ];
        correctArray = [
            competencyAcl.apiKey.wildcard,
            competencyAcl.actor.wildcard,
            competencyAcl.behavior.wildcard
        ];
        additional = [
            competencyAcl.lifecycle.approve,
            competencyAcl.condition.updateDraft,
            competencyAcl.competencies.create
        ];
    });

    it("Should return a condensed array given a large array of acls", () => {
        expect(new Set(condenseAcl(aclArray))).toEqual(new Set(correctArray));
    });

    it("Should return a partially condensed array given a large array of acls", () => {
        expect(new Set(condenseAcl(aclArray.concat(additional)))).toEqual(new Set(correctArray.concat(additional)));
    });

    it("Should return the get wildcard from an array of get permissions", () => {
        expect(new Set(condenseAcl(competencyGetWildcard))).toEqual(new Set([competencyAcl.competencies.getWildcard]));
    });

    it("Should return a get wilcard plus the other permissions", () => {
        const newAcl = competencyGetWildcard.concat(additional);
        expect(new Set(condenseAcl(newAcl))).toEqual(new Set([competencyAcl.competencies.getWildcard].concat(additional)));
    });

    it("Should return competency:competencies:* given all competencies permissions", () => {
        expect(new Set(condenseAcl(competencyWildcard))).toEqual(new Set([competencyAcl.competencies.wildcard]));
    });

    it("Should return a the same array since it could not be condensed", () => {
        const sameACL = [
            competencyAcl.user.create,
            competencyAcl.user.getProfile,
            competencyAcl.user.getUsers,
            competencyAcl.user.updateAccount,
            competencyAcl.competencies.getPublished
        ];
        expect(new Set(condenseAcl(sameACL))).toEqual(new Set(sameACL));
    });

    it("Should thrown an error for a poorly formatted acl", () => {
        expect(() => { return condenseAcl(["competency:helloThere"])}).toThrowError();
    })
});