import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { FastifyInstance } from "fastify";

export const configure = (fastify: FastifyInstance) => {
  fastify.register(fastifySwagger);
  fastify.register(fastifySwaggerUi, { routePrefix: "docs" });

  console.log("Swagger docs configured!");
};
