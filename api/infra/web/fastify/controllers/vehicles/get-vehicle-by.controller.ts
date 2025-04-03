import { FastifyReply, FastifyRequest } from "fastify";
import { GetVehicleByIdUseCase } from "../../../../../domain/vehicles/use-cases/get-vehicle-by-id.use-case";

interface Request {
  Params: { id: number };
}

export class GetVehicleByIdController {
  private readonly useCase: GetVehicleByIdUseCase;

  constructor() {
    this.useCase = new GetVehicleByIdUseCase();
  }

  execute = async (request: FastifyRequest<Request>, reply: FastifyReply) => {
    const { id } = request.params;

    const vehicle = await this.useCase.execute(id);

    reply.status(200).send(vehicle);
  };
}
