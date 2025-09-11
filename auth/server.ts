import processEnv from "./processEnv.ts";

import fs from "node:fs";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import Fastify from "fastify";

const __dirname = dirname(fileURLToPath(import.meta.url));

const fastify = Fastify({
  logger: processEnv.DEV === "true",

  http2: true,
  https: {
    allowHTTP1: true,
    key: fs.readFileSync(path.join(__dirname, "https", "private.key")),
    cert: fs.readFileSync(path.join(__dirname, "https", "certificate.crt")),
  },
});

fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});

async function start() {
  try {
    await fastify.listen({
      host: processEnv.HOST,
      port: parseInt(processEnv.PORT),
    });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}
start();
