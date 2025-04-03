import Container from "typedi";
import { VehiclesRepository } from "../repositories/vehicles.repository";
import { PatchVehicleDTO } from "../dtos/patch-vehicle.dto";

export class PatchVehicleUseCase {
  private readonly vehiclesRepository: VehiclesRepository;

  constructor() {
    this.vehiclesRepository = Container.get("VehiclesRepository");
  }

  async execute(params: PatchVehicleDTO): Promise<void> {
    await this.vehiclesRepository.patch(params);
  }
}
