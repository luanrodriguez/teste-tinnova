import { FastifyReply, FastifyRequest } from "fastify";
import { CreateVehicleUseCase } from "../../../../../domain/vehicles/use-cases/create-vehicle.use-case";
import { CreateVehicleDTO } from "../../../../../domain/vehicles/dtos/create-vehicle.dto";

interface Request {
  Body: CreateVehicleDTO;
}

export class CreateVehicleController {
  private readonly useCase: CreateVehicleUseCase;

  constructor() {
    this.useCase = new CreateVehicleUseCase();
  }

  execute = async (request: FastifyRequest<Request>, reply: FastifyReply) => {
    const params = request.body;

    const vehicle = await this.useCase.execute(params);

    reply.status(201).send(vehicle);
  };
}
