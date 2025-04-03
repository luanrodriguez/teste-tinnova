import Container from "typedi";
import { VehiclesRepository } from "../repositories/vehicles.repository";
import { UpdateVehicleDTO } from "../dtos/update-vehicle.dto";

export class UpdateVehicleUseCase {
  private readonly vehiclesRepository: VehiclesRepository;

  constructor() {
    this.vehiclesRepository = Container.get("VehiclesRepository");
  }

  async execute(params: UpdateVehicleDTO): Promise<void> {
    await this.vehiclesRepository.update(params);
  }
}
