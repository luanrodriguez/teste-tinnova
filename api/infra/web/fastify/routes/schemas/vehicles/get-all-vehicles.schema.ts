import { FastifySchema } from "fastify";
import S from "fluent-json-schema";

const query = S.object()
  .prop("name", S.string())
  .prop("brand", S.string())
  .prop("year", S.number())
  .prop("sold", S.boolean());

const successResponse = S.array().items(S.ref("Vehicle#"));

export const getAllVehiclesSchema: FastifySchema = {
  tags: ["Vehicles"],
  summary: "Busca todos os veículos, pode ser filtrado",
  querystring: query,
  response: {
    200: successResponse,
  },
};
