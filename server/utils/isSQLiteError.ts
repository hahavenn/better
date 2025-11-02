import type SQLITE_RESULT_CODES from "../constants/SQLiteResultCodes";

type SQLiteResultError = {
  readonly query: string;
  readonly params: string[];
  readonly cause: {
    readonly code: (typeof SQLITE_RESULT_CODES)[keyof typeof SQLITE_RESULT_CODES];
    readonly rawCode: keyof typeof SQLITE_RESULT_CODES;
    readonly name: string;
  };
};

/**
 * Checks if provided error is SQLite error
 *
 * @param error error to check for SQLite error type
 *
 * @example
 * ```typescript
 * try {
 *   // ...some code that throw error
 * } catch (error) {
 *   if(isSQLiteError(error)) {
 *     // now error is typed as SQLite error
 *     console.log(error.cause.code);
 *   }
 * }
 * ```
 */
export default function (error: unknown): error is SQLiteResultError {
  const e = error as any;

  return [
    "query" in e && typeof e.query === "string",
    "params" in e && Array.isArray(e.params),
    "cause" in e && typeof e.cause === "object",
    e.cause && "code" in e.cause && typeof e.cause.code === "string",
    e.cause && "rawCode" in e.cause && typeof e.cause.rawCode === "number",
    e.cause && "name" in e.cause && typeof e.cause.name === "string",
  ].every((condition) => condition === true);
}
