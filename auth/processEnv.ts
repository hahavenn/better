/** Typed version of `process.env` */
const processEnv = process.env as {
  /** Server host */
  HOST: string;
  /** Server port */
  PORT: string;

  /** Is dev mode */
  DEV: "true" | "false";

  /** Address of client server for accepting due CORS */
  CORS_CLIENT: string;

  /** Generated JWT secret string */
  JWT_SECRET: string;
};
export default processEnv;
