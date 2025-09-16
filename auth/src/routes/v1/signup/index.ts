import type { FastifyInstance, FastifyPluginOptions } from "fastify";

export default async function (
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.post("/signup", async (request, response) => {
    fastify.log.info(JSON.stringify(request.body));

    const toSend = { accept: true };
    response.send(toSend);

    await response;
  });
}
