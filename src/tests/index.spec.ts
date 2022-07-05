import { competencyAcl, validateAclString } from "../index";

const invalidAcls = {
    containsNumbers: "notAvali:dacl1:*",
    notFormattedCorrectly: "Not!formatedCorrectly.",
    almostCorrect: "Iam:almost:*correct",
    incorrectCompAction: "competency:competencies:getAll",
    incorrectModule: "competency:services:get*",
    incorrectService: "hello:competencies:get*",
    incorrectAudienceAction: "competency:audience:getAll",
}

describe("Validate Invalid Acls", () => {
    it(`Should return false because format of ${invalidAcls.containsNumbers} is invalid`, () => {
        expect(validateAclString(invalidAcls.containsNumbers)).toBe(false);
    });

    it(`Should return false because format of ${invalidAcls.notFormattedCorrectly} is invalid`, () => {
        expect(validateAclString(invalidAcls.notFormattedCorrectly)).toBe(false);
    });

    it(`Should return false because format of ${invalidAcls.almostCorrect} is invalid`, () => {
        expect(validateAclString(invalidAcls.almostCorrect)).toBe(false);
    });

    it(`Should return false because ${invalidAcls.incorrectCompAction} has an incorrect action`, () => {
        expect(validateAclString(invalidAcls.incorrectCompAction)).toBe(false);
    });

    it(`Should return false because ${invalidAcls.incorrectModule} has an incorrect module`, () => {
        expect(validateAclString(invalidAcls.incorrectModule)).toBe(false);
    });

    it(`Should return false because ${invalidAcls.incorrectService} has an incorrect service`, () => {
        expect(validateAclString(invalidAcls.incorrectService)).toBe(false);
    });

    it(`Should return false because ${invalidAcls.incorrectAudienceAction} has an incorrect action`, () => {
        expect(validateAclString(invalidAcls.incorrectAudienceAction)).toBe(false);
    })
});

describe("Validate Valid Acls", () => {
    it(`Should return true for ${competencyAcl.competencies.createCompetency}`, () => {
        expect(validateAclString(competencyAcl.competencies.createCompetency)).toBe(true);
    });
    it(`Should return true for ${competencyAcl.audience.wildcard}`, () => {
        expect(validateAclString(competencyAcl.audience.wildcard)).toBe(true);
    })
});