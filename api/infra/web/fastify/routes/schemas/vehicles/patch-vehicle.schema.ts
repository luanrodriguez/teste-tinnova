import { FastifySchema } from "fastify";
import S from "fluent-json-schema";
import { ValidBrands } from "../../../../../../domain/vehicles/enums/valid-brands";

const params = S.object().prop("id", S.number().required());

const body = S.object()
  .prop("name", S.string())
  .prop("brand", S.string().enum(Object.values(ValidBrands)))
  .prop("year", S.number().minimum(1))
  .prop("description", S.string())
  .prop("sold", S.boolean());

export const patchVehicleSchema: FastifySchema = {
  tags: ["Vehicles"],
  summary: "Atualiza algumas características de um veículo",
  body,
  params,
  response: {
    204: {},
  },
};
