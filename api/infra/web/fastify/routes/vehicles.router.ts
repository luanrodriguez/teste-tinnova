import { FastifyInstance } from "fastify";
import { GetAllVehiclesController } from "../controllers/vehicles/get-all-vehicles.controller";
import { getAllVehiclesSchema } from "./schemas/vehicles/get-all-vehicles.schema";
import { GetVehicleByIdController } from "../controllers/vehicles/get-vehicle-by.controller";
import { getVehicleByIdSchema } from "./schemas/vehicles/get-vehicle-by-id.schema";
import { CreateVehicleController } from "../controllers/vehicles/create-vehicle.controller";
import { UpdateVehicleController } from "../controllers/vehicles/update-vehicle.controller";
import { PatchVehicleController } from "../controllers/vehicles/patch-vehicle.controller";
import { DeleteVehicleController } from "../controllers/vehicles/delete-vehicle.controller";
import { updateVehicleSchema } from "./schemas/vehicles/update-vehicle.schema";
import { patchVehicleSchema } from "./schemas/vehicles/patch-vehicle.schema";
import { deleteVehicleSchema } from "./schemas/vehicles/delete-vehicle.schema";
import { createVehicleSchema } from "./schemas/vehicles/create-vehicle.schema";

export const configure = (fastify: FastifyInstance) => {
  const getAllVehiclesController = new GetAllVehiclesController();
  const getVehicleByIdController = new GetVehicleByIdController();
  const createVehicleController = new CreateVehicleController();
  const updateVehicleController = new UpdateVehicleController();
  const patchVehicleController = new PatchVehicleController();
  const deleteVehicleController = new DeleteVehicleController();

  fastify.route({
    url: "/vehicles",
    method: "get",
    schema: getAllVehiclesSchema,
    handler: getAllVehiclesController.execute,
  });

  fastify.route({
    url: "/vehicles/:id",
    method: "get",
    schema: getVehicleByIdSchema,
    handler: getVehicleByIdController.execute,
  });

  fastify.route({
    url: "/vehicles",
    method: "post",
    schema: createVehicleSchema,
    handler: createVehicleController.execute,
  });

  fastify.route({
    url: "/vehicles/:id",
    method: "put",
    schema: updateVehicleSchema,
    handler: updateVehicleController.execute,
  });

  fastify.route({
    url: "/vehicles/:id",
    method: "patch",
    schema: patchVehicleSchema,
    handler: patchVehicleController.execute,
  });

  fastify.route({
    url: "/vehicles/:id",
    method: "delete",
    schema: deleteVehicleSchema,
    handler: deleteVehicleController.execute,
  });
};
