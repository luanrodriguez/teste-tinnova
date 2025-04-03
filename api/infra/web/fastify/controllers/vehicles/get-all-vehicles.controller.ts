import { FastifyReply, FastifyRequest } from "fastify";
import { GetAllVehiclesUseCase } from "../../../../../domain/vehicles/use-cases/get-all-vehicles.use-case";
import { GetAllVehiclesDTO } from "../../../../../domain/vehicles/dtos/get-all-vehicles.dto";

interface Request {
  Querystring: GetAllVehiclesDTO;
}

export class GetAllVehiclesController {
  private readonly useCase: GetAllVehiclesUseCase;

  constructor() {
    this.useCase = new GetAllVehiclesUseCase();
  }

  execute = async (request: FastifyRequest<Request>, reply: FastifyReply) => {
    const params = request.query;

    const vehicles = await this.useCase.execute(params);

    reply.status(200).send(vehicles);
  };
}
