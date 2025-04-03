import "reflect-metadata";

import Fastify from "fastify";
import qs from "qs";

import * as DI from "../../../config/di";
import * as SecurityHeaders from "./config/security-headers";
import * as Cors from "./config/cors";
import * as Schemas from "./config/schemas";
import * as Swagger from "./config/swagger";
import * as Router from "./routes";

export const start = async () => {
  const fastify = Fastify({
    querystringParser: (str) => qs.parse(str),
  });

  DI.configure();

  SecurityHeaders.register(fastify);

  Cors.register(fastify);

  Schemas.configure(fastify);

  Swagger.configure(fastify);

  Router.configure(fastify);

  fastify.listen({ port: 3001 }, function (err) {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }

    console.log("Server started on port 3001");
  });
};
