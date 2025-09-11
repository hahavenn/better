/** Typed version of `process.env` */
const processEnv = process.env as {
  /** Server host */
  HOST: string;
  /** Server port */
  PORT: string;

  /** Is dev mode */
  DEV: "true" | "false";
};
export default processEnv;
