import processEnv from "./processEnv.ts";

import Fastify from "fastify";

const fastify = Fastify({ logger: processEnv.DEV === "true" });

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
