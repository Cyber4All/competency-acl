/**
 * Error thrown when there is a validation issue with acls
 */
export class ValidationError extends Error {
    constructor(msg: string) {
        super(msg);
    }
}