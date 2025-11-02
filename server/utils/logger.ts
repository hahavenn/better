import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import pino from "pino";

import LOG_TYPES from "../constants/logs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const sqliteLogger = pino(
  {
    level: "error",
    nestedKey: "fatalObject",
  },
  pino.destination({
    dest: resolve(__dirname, "..", "..", "logs", "sqlite.logs"),
    mkdir: true,
  })
);
const allLogger = pino(
  {
    level: "error",
    nestedKey: "fatalObject",
  },
  pino.destination({
    dest: resolve(__dirname, "..", "..", "logs", "all.logs"),
    mkdir: true,
  })
);

type LoggerOptions = {
  /**
   * Type of logger to use
   * @default LOG_TYPES.ALL
   * @see `/server/constants/logs`
   */
  type?: (typeof LOG_TYPES)[keyof typeof LOG_TYPES];
};

/**
 * Main logger to log errors in logs/*.logs files.
 *
 * @description
 * If no type specified - log to `all.logs file`
 *
 * @example
 * ```typescript
 * // Log into specialized log file `sqlite.logs`
 * logger(handled.value.cause, {
 *   type: LOG_TYPES.SQLITE,
 * });
 *
 * // Log into `all.logs` file
 * logger("message to log")
 * ```
 */
export default function (
  /**
   * Value to log
   */
  toLog: any,

  options?: LoggerOptions
) {
  switch (options?.type ?? LOG_TYPES.ALL) {
    case LOG_TYPES.SQLITE: {
      sqliteLogger.error({ value: toLog, stack: new Error().stack });
      break;
    }
    default: {
      allLogger.error({ value: toLog, stack: new Error().stack });
      break;
    }
  }
}
