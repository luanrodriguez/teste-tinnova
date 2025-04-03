import Container from "typedi";
import { VehiclesRepository } from "../repositories/vehicles.repository";

export class DeleteVehicleUseCase {
  private readonly vehiclesRepository: VehiclesRepository;

  constructor() {
    this.vehiclesRepository = Container.get("VehiclesRepository");
  }

  async execute(id: number): Promise<void> {
    await this.vehiclesRepository.delete(id);
  }
}
