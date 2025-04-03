import { FastifySchema } from "fastify";
import S from "fluent-json-schema";

const params = S.object().prop("id", S.number().required());

export const deleteVehicleSchema: FastifySchema = {
  tags: ["Vehicles"],
  summary: "Deleta um veículo",
  params,
  response: {
    204: {},
  },
};
