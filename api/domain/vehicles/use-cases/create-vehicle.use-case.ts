import Container from "typedi";
import { VehiclesRepository } from "../repositories/vehicles.repository";
import { CreateVehicleDTO } from "../dtos/create-vehicle.dto";
import { Vehicle } from "../interfaces/Vehicle";

export class CreateVehicleUseCase {
  private readonly vehiclesRepository: VehiclesRepository;

  constructor() {
    this.vehiclesRepository = Container.get("VehiclesRepository");
  }

  async execute(params: CreateVehicleDTO): Promise<Vehicle> {
    const vehicle = await this.vehiclesRepository.create(params);

    return vehicle;
  }
}
