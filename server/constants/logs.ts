/**
 * Type of logs that project handling.
 * Used for separate log files
 */
const LOG_TYPES = {
  /**
   * Log errors for unhandled sqlite results/errors
   */
  SQLITE: "sqlite",

  /**
   * All errors to log
   */
  ALL: "all",
} as const;

export default LOG_TYPES;
