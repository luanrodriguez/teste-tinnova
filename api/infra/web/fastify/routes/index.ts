import { FastifyInstance } from "fastify";

import * as VehiclesRouter from "./vehicles.router";

export const configure = (fastify: FastifyInstance) => {
  fastify.get("/", (request, reply) => reply.redirect("/docs"));

  fastify.register((instance, opts, done) => {
    VehiclesRouter.configure(instance);
    done();
  });
};
