/** Typed version of `process.env` */
const processEnv = process.env as {
  /** Server host */
  HOST: string;
  /** Server port */
  PORT: string;
};
export default processEnv;
