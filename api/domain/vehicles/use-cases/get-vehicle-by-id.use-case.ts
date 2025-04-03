import Container from "typedi";
import { VehiclesRepository } from "../repositories/vehicles.repository";
import { Vehicle } from "../interfaces/Vehicle";

export class GetVehicleByIdUseCase {
  private readonly vehiclesRepository: VehiclesRepository;

  constructor() {
    this.vehiclesRepository = Container.get("VehiclesRepository");
  }

  async execute(id: number): Promise<Vehicle> {
    const vehicle = await this.vehiclesRepository.getById(id);

    if (!vehicle) {
      throw new Error("Vehicle not found");
    }

    return vehicle;
  }
}
