type SQLiteResultError = {
  readonly query: string;
  readonly params: string[];
  readonly cause: {
    readonly code: (typeof SQLiteResultCodes)[keyof typeof SQLiteResultCodes];
    readonly rawCode: keyof typeof SQLiteResultCodes;
    readonly name: string;
  };
};

type ReturnError =
  | {
      type: "SQLite";
      error: SQLiteResultError;
    }
  | {
      type: "fatal";
      error: unknown;
    };

type HandleErrorParamType = unknown;

function isSQLiteError(
  error: HandleErrorParamType
): error is SQLiteResultError {
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

/**
 * Handle error in `defineEventHandler`
 *
 * @returns typed error to be proceeded to handle
 *
 * @example
 * ```typescript
 * const handled = await handleError(error);
 * if(handled.type === "SQLite") {
 *   // your handle logic for SQLite errors
 * } else {
 *   // your handle logic for other error types
 * }
 * ```
 */
export default async function (
  /** Error to handle */
  error: HandleErrorParamType
): Promise<ReturnError> {
  switch (true) {
    case isSQLiteError(error): {
      return {
        type: "SQLite",

        // need to be destructed, because drizzle somehow return DrizzleQueryError when logging it
        error: { ...error },
      };
    }
    default: {
      return {
        type: "fatal",
        error: error,
      };
    }
  }
}
