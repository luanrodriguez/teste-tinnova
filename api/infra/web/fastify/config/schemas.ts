import { FastifyInstance } from "fastify";
import S from "fluent-json-schema";

export const configure = (fastify: FastifyInstance) => {
  const vehicle = S.object()
    .id("Vehicle")
    .prop("id", S.number())
    .prop("name", S.string())
    .prop("brand", S.string())
    .prop("description", S.string())
    .prop("year", S.number())
    .prop("sold", S.boolean())
    .prop("createdAt", S.string().format("date-time"))
    .prop("updatedAt", S.string().format("date-time"))
    .prop("deletedAt", S.string().raw({ nullable: true }));

  fastify.addSchema(vehicle);

  console.log("Schemas configured!");
};
