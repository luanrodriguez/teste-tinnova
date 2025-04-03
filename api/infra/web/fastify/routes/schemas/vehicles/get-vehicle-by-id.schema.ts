import { FastifySchema } from "fastify";
import S from "fluent-json-schema";

const params = S.object().prop("id", S.number());

const successResponse = S.ref("Vehicle#");

export const getVehicleByIdSchema: FastifySchema = {
  tags: ["Vehicles"],
  summary: "Busca um veículo por id",
  params,
  response: {
    200: successResponse,
  },
};
