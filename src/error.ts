
export interface ValidationErrorOptions {
    /**
     * The shape ID name of the exception.
     */
    readonly name: string;
    /**
     * Whether the client or server are at fault.
     */
    readonly $fault: "client" | "server";

	/**
	 * The error message.
	 */
	readonly message: string;
}

/**
 * @public
 *
 * Base error class for the exceptions from the validation acl package.
 */
export declare class ValidationError extends Error{
    readonly $fault: "client" | "server";
	constructor(options: ValidationErrorOptions);
}

// https://aws.amazon.com/blogs/developer/service-error-handling-modular-aws-sdk-js/

/**
 * The action did not match the REGEX pattern to validate the formatting of the ACL string.
 * 
 * @public
 */
export class ActionMismatchError extends ValidationError {
	/**
	 * @internal
	 */
	constructor(message?: string) {
		super({
			name: "ActionMismatchError",
			$fault: "client",
			message,
		});
	}
}

/**
 * The service defined in the ACL string is not supported by the package.
 * 
 * @public
 */
export class ServiceNotSupportedError extends ValidationError {
	/**
	 * @internal
	 */
	constructor(message?: string) {
		super({
			name: "ServiceNotSupportedError",
			$fault: "client",
			message,
		});
	}
}

/**
 * The action being validated is not supported by the package.
 * 
 * @public
 */
export class ActionNotSupportedError extends ValidationError {
	/**
	 * @internal
	 */
	constructor(message?: string) {
		super({
			name: "ActionNotSupportedError",
			$fault: "client",
			message,
		});
	}
}
