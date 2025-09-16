import type { FastifyInstance, FastifyPluginOptions } from "fastify";

import v1 from "./v1/index.ts";

export default async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  await fastify.register(v1, { prefix: "v1" });
}
