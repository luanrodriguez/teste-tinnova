import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteVehicleUseCase } from "../../../../../domain/vehicles/use-cases/delete-vehicle.use-case";

interface Request {
  Params: { id: number };
}

export class DeleteVehicleController {
  private readonly useCase: DeleteVehicleUseCase;

  constructor() {
    this.useCase = new DeleteVehicleUseCase();
  }

  execute = async (request: FastifyRequest<Request>, reply: FastifyReply) => {
    const { id } = request.params;

    await this.useCase.execute(id);

    reply.status(204).send();
  };
}
