import { FindOptionsWhere, ILike, Repository } from "typeorm";
import { CreateVehicleDTO } from "../../../../domain/vehicles/dtos/create-vehicle.dto";
import { GetAllVehiclesDTO } from "../../../../domain/vehicles/dtos/get-all-vehicles.dto";
import { PatchVehicleDTO } from "../../../../domain/vehicles/dtos/patch-vehicle.dto";
import { UpdateVehicleDTO } from "../../../../domain/vehicles/dtos/update-vehicle.dto";
import { Vehicles as VehiclesTypeorm } from "../entities/vehicles";
import { Vehicle } from "../../../../domain/vehicles/interfaces/Vehicle";
import { VehiclesRepository } from "../../../../domain/vehicles/repositories/vehicles.repository";
import { dataSource } from "../connection";
import { VehiclesMapper } from "../mappers/vehicles.mapper";

export class VehiclesTypeormRepository implements VehiclesRepository {
  private readonly repository: Repository<VehiclesTypeorm>;

  constructor() {
    this.repository = dataSource.getRepository(VehiclesTypeorm);
  }

  async getAll(filters?: GetAllVehiclesDTO): Promise<Vehicle[]> {
    try {
      let where: FindOptionsWhere<VehiclesTypeorm> = {};

      if (filters?.name) {
        where.name = ILike(`%${filters.name}%`);
      }

      if (filters?.brand) {
        where.brand = ILike(`%${filters.brand}%`);
      }

      if (filters?.year) {
        where.year = filters.year;
      }

      if (filters?.sold) {
        where.sold = filters.sold;
      }

      const vehicles = await this.repository.find({ where });

      return vehicles.map(VehiclesMapper.toDomainEntity);
    } catch {
      throw new Error("Error when getting all vehicles");
    }
  }

  async getById(id: number): Promise<Vehicle | null> {
    try {
      const vehicle = await this.repository.findOne({ where: { id } });

      return vehicle ? VehiclesMapper.toDomainEntity(vehicle) : null;
    } catch {
      throw new Error("Error when getting a vehicle");
    }
  }

  async create(params: CreateVehicleDTO): Promise<Vehicle> {
    try {
      const vehicle = await this.repository.save(params);

      return VehiclesMapper.toDomainEntity(vehicle);
    } catch {
      throw new Error("Error when creating a vehicle");
    }
  }

  async update(params: UpdateVehicleDTO): Promise<void> {
    try {
      await this.repository.update(
        { id: params.id },
        {
          brand: params.brand,
          year: params.year,
          description: params.description,
          name: params.name,
          sold: params.sold,
        }
      );
    } catch {
      throw new Error("Error when updating a vehicle");
    }
  }

  async patch(params: PatchVehicleDTO): Promise<void> {
    try {
      await this.repository.update(
        { id: params.id },
        {
          brand: params?.brand,
          year: params?.year,
          description: params?.description,
          name: params?.name,
          sold: params?.sold,
        }
      );
    } catch {
      throw new Error("Error when patching a vehicle");
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await this.repository.softDelete({ id });
    } catch {
      throw new Error("Error when deleting a vehicle");
    }
  }
}
