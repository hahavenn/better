type ProcessEnv = {
  /** Server host */
  HOST: string;
  /** Server port */
  PORT: string;

  /** Is dev mode */
  DEV: boolean;

  /** Address of client server for accepting due CORS */
  CORS_CLIENT: string;

  /** Generated JWT secret string */
  JWT_SECRET: string;
};

const processEnv = new Proxy(process.env, {
  get(target, prop) {
    if (prop === "DEV") {
      return target.DEV === "true";
    }

    return Reflect.get(target, prop);
  },
}) as unknown as ProcessEnv;

export default processEnv;
