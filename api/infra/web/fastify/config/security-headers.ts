import fastifyHelmet from "@fastify/helmet";
import { FastifyInstance } from "fastify";

export const register = (fastify: FastifyInstance) => {
  fastify.register(fastifyHelmet);

  console.log("Helmet configured!");
};
