import { FastifySchema } from "fastify";
import S from "fluent-json-schema";
import { ValidBrands } from "../../../../../../domain/vehicles/enums/valid-brands";

const params = S.object().prop("id", S.number().required());

const body = S.object()
  .prop("name", S.string().required())
  .prop("brand", S.string().enum(Object.values(ValidBrands)).required())
  .prop("year", S.number().minimum(1).required())
  .prop("description", S.string().required())
  .prop("sold", S.boolean().required());

export const updateVehicleSchema: FastifySchema = {
  tags: ["Vehicles"],
  summary: "Atualiza um veículo",
  body,
  params,
  response: {
    204: {},
  },
};
