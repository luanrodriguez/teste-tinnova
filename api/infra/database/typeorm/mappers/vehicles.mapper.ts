import { Vehicle } from "../../../../domain/vehicles/interfaces/Vehicle";
import { Vehicles as VehiclesTypeorm } from "../entities/vehicles";

export class VehiclesMapper {
  static toDomainEntity(entity: VehiclesTypeorm): Vehicle {
    return {
      id: entity.id,
      name: entity.name,
      brand: entity.brand,
      year: entity.year,
      sold: entity.sold,
      description: entity.description,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      deletedAt: entity.deletedAt,
    };
  }
}
