import { FastifyReply, FastifyRequest } from "fastify";
import { UpdateVehicleUseCase } from "../../../../../domain/vehicles/use-cases/update-vehicle.use-case";
import { UpdateVehicleDTO } from "../../../../../domain/vehicles/dtos/update-vehicle.dto";

interface Request {
  Body: Omit<UpdateVehicleDTO, "id">;
  Params: { id: number };
}

export class UpdateVehicleController {
  private readonly useCase: UpdateVehicleUseCase;

  constructor() {
    this.useCase = new UpdateVehicleUseCase();
  }

  execute = async (request: FastifyRequest<Request>, reply: FastifyReply) => {
    const params = request.body;
    const { id } = request.params;

    await this.useCase.execute({ id, ...params });

    reply.status(204).send();
  };
}
