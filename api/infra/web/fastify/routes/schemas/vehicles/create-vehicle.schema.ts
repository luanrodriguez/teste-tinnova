import { FastifySchema } from "fastify";
import S from "fluent-json-schema";
import { ValidBrands } from "../../../../../../domain/vehicles/enums/valid-brands";

const body = S.object()
  .prop("name", S.string().required())
  .prop("brand", S.string().enum(Object.values(ValidBrands)).required())
  .prop("year", S.number().minimum(1).required())
  .prop("description", S.string().required())
  .prop("sold", S.boolean().required());

const successResponse = S.ref("Vehicle#");

export const createVehicleSchema: FastifySchema = {
  tags: ["Vehicles"],
  summary: "Cria um veículo",
  body,
  response: {
    201: successResponse,
  },
};
