const fastify = require("fastify")({
  logger: true,
});
fastify.register(require("./router"));

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};
start();
