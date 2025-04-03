import Container from "typedi";
import { VehiclesRepository } from "../repositories/vehicles.repository";
import { GetAllVehiclesDTO } from "../dtos/get-all-vehicles.dto";
import { Vehicle } from "../interfaces/Vehicle";

export class GetAllVehiclesUseCase {
  private readonly vehiclesRepository: VehiclesRepository;

  constructor() {
    this.vehiclesRepository = Container.get("VehiclesRepository");
  }

  async execute(params: GetAllVehiclesDTO): Promise<Vehicle[]> {
    const vehicles = await this.vehiclesRepository.getAll(params);

    return vehicles;
  }
}
