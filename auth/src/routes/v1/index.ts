import type { FastifyInstance, FastifyPluginOptions } from "fastify";

import signup from "./signup/index.ts";

export default async function (
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  await fastify.register(signup);
}
