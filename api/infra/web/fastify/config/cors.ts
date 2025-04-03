import fastifyCors from "@fastify/cors";
import { FastifyInstance } from "fastify";

export const register = (fastify: FastifyInstance) => {
  fastify.register(fastifyCors, {
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  });

  console.log("Cors configured!");
};
