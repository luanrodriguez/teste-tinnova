import { FastifyReply, FastifyRequest } from "fastify";
import { PatchVehicleDTO } from "../../../../../domain/vehicles/dtos/patch-vehicle.dto";
import { PatchVehicleUseCase } from "../../../../../domain/vehicles/use-cases/patch-vehicle.use-case";

interface Request {
  Body: Omit<PatchVehicleDTO, "id">;
  Params: { id: number };
}

export class PatchVehicleController {
  private readonly useCase: PatchVehicleUseCase;

  constructor() {
    this.useCase = new PatchVehicleUseCase();
  }

  execute = async (request: FastifyRequest<Request>, reply: FastifyReply) => {
    const params = request.body;
    const { id } = request.params;

    await this.useCase.execute({ id, ...params });

    reply.status(204).send();
  };
}
