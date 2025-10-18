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
type HandleErrorFn = (error: HandleErrorParamType) => Promise<ReturnError>;

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

const handleError: HandleErrorFn = async (error) => {
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
};
export default handleError;
