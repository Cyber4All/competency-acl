# competency-acl

# Table of contents
- [competency-acl](#competency-acl)
- [Table of contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
  - [ValidateAclArray](#validateaclarray)
  - [ValidateAcl](#validateacl)
  - [CondenseAcl](#condenseacl)
- [Actions](#actions)
  - [Competency Service](#competency-service)
    - [Competencies Module](#competencies-module)
    - [Actor Module](#actor-module)
    - [Condition Module](#condition-module)
    - [Documentation Module](#documentation-module)
    - [Behavior Module](#behavior-module)
    - [Degree Module](#degree-module)
    - [Employability Module](#employability-module)
    - [User Module](#user-module)
    - [ApiKey Module](#apikey-module)
    - [Search Module](#search-module)
    - [Lifecycle Module](#lifecycle-module)
# Installation
To install, run:
```
npm install competency-acl
```
# Usage
This package is for intended use within the competency ecosystem, including but not limited to: Api, pdp, and gateway

# Functions

## ValidateAclArray
```TypeScript
export function validateAclArray(acl: string[]): string[]
```
`validateAclArray()` validates an array of actions, ensuring they meet the regex requirements, and are existing actions.

The function also removes any duplicates in the array. For each action in the array `validateAcl()` is called.

Returns an expanded version of the acl array given. With all the wildcards expanded to help with verification

## ValidateAcl
```TypeScript
export function validateAcl(acl: string): string[]
```
`validateAcl()` validates a single acl string. Ensuring that the string matches the regex and the action exists

`ValidationError` is thrown is the service field of the given acl is not valid & when the given acl is not valid

Returns an expanded version of the acl string, if the action was a wildcard, the function returns an array of all actions within the scope of that wildcard

## CondenseAcl
```TypeScript
export function condenseAcl(acl: string[]): string[]
```
`condenseAcl()` is given an array of actions and condenses the array returning a new array with possible actions being removed and being replaced with a wilcard.

Ex:
```TypeScript
let expanded = [
    "competency:competencies:getDraft",
    "competency:competencies:getSubmitted",
    "competency:competencies:getDeclined",
    "competency:competencies:getPublished",
    "competency:competencies:getDeprecated"
];
assert(condenseAcl(expanded), ["competency:competencies:get*"]);

```

# Actions
In the current version of the competency api, there are no microservices. Which means that the service part of the action will all say `competency`

## Competency Service

### Competencies Module

| Action | Description |
| ------ | ----------- |
| competency:competencies:* | Wilcard for Competencies module |
| competency:competencies:get* | Get Wildcard, Giving a user all get actions |
| competency:competencies:getDraft | Get a competency draft |
| competency:competencies:getSubmitted | Get a submitted competency |
| competency:competencies:getDeclined | Get a declined competency |
| competency:competencies:getPublised | Get a published competency |
| competency:competencies:getDeprecated | Get a deprecated competency |
| competency:competencies:deleteDraft | Delete a competency draft |
| competency:competencies:create | Create a competency |
| competency:competencies:version | Version a competency |

### Name Module

| Action | Description |
| ------ | ----------- |
| competency:name:* | Wilcard for the name field of a competency |
| competency:name:updateDraft | Update the name field of a draft competency |
| competency:name:updateSubmitted | Update the name field of a submitted competency |

### Actor Module

| Action | Description |
| ------ | ----------- |
| competency:actor:* | Wilcard for the Actor Module |
| competency:actor:updateDraft | Update the actor field of a draft competency |
| competency:actor:updateSubmitted | Update the actor field of a submitted competency |
### Condition Module

| Action | Description |
| ------ | ----------- |
| competency:condition:* | Wilcard for the Condition Module |
| competency:condition:updateDraft | Update the condition field of a draft competency |
| competency:condition:updateSubmitted | Update the condition field of a submitted competency |
### Documentation Module

| Action | Description |
| ------ | ----------- |
| competency:documentation:* | Wilcard for the Documentation Module |
| competency:documentation:updateDraft | Update the documentation field of a draft competency |
| competency:documentation:updateSubmitted | Update the documentation field of a submitted competency |
| competency:documentation:uploadDraft | Upload documents to a draft competency |
| competency:documentation:uploadSubmitted | Upload documents to a submitted competency |

### Behavior Module

| Action | Description |
| ------ | ----------- |
| competency:behavior:* | Wilcard for the Behavior Module |
| competency:behavior:updateDraft | Update the behavior field of a draft competency |
| competency:behavior:updateSubmitted | Update the behavior field of a submitted competency |
### Degree Module

| Action | Description |
| ------ | ----------- |
| competency:degree:* | Wilcard for the Degree Module |
| competency:degree:updateDraft | Update the degree field of a draft competency |
| competency:degree:updateSubmitted | Update the degree field of a submitted competency |
### Employability Module

| Action | Description |
| ------ | ----------- |
| competency:employability:* | Wilcard for the Employability Module |
| competency:employability:updateDraft | Update the employability field of a draft competency |
| competency:employability:updateSubmitted | Update the employability field of a submitted competency |
### User Module

| Action | Description |
| ------ | ----------- |
| competency:user:* | Wildcard for the User module |
| competency:user:getUsers | Get registered users |
| competency:user:getProfile | Get a users profile |
| competency:user:updateAccount | Update a users account |
| competency:user:updateAcl | Update a users acl |
| competency:user:create | Create a user |

### ApiKey Module

| Action | Description |
| ------ | ----------- |
| competency:apiKey:* | Wildcard for the ApiKey module |
| competency:apiKey:create | Create an api key |
| competency:apiKey:delete | Delete an api key |
| competency:apiKey:updateAcl | Update the acl of an api key |

### Search Module

| Action | Description |
| ------ | ----------- |
| competency:search:* | Wildcard for the Search module |
| competency:search:published | Search for published competencies |
| competency:search:declined | Search for declined competencies |
| competency:search:submitted | Search for submitted competencies |
| competency:search:draft | Search for draft competencies |
| competency:search:deprecated | Search for deprecated competencies |

### Lifecycle Module

| Action | Description |
| ------ | ----------- |
| competency:lifecycle:* | Wildcard for the Lifecycle module |
| competency:lifecycle:deprecate | Deprecate a competency |
| competency:lifecycle:submit | Submit a competency |
| competency:lifecycle:cancelSubmission | Cancel the submission of a competency |
| competency:lifecycle:decline | Decline the submission of a competency |
| competency:lifecycle:approve | Approve the submission of a competency |
| competency:lifecycle:reviseDeclined | Revise a declined competency |