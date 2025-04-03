import { CreateVehicleDTO } from "../dtos/create-vehicle.dto";
import { GetAllVehiclesDTO } from "../dtos/get-all-vehicles.dto";
import { PatchVehicleDTO } from "../dtos/patch-vehicle.dto";
import { UpdateVehicleDTO } from "../dtos/update-vehicle.dto";
import { Vehicle } from "../interfaces/Vehicle";

export interface VehiclesRepository {
  getAll(filters?: GetAllVehiclesDTO): Promise<Vehicle[]>;
  getById(id: number): Promise<Vehicle | null>;
  create(params: CreateVehicleDTO): Promise<Vehicle>;
  update(params: UpdateVehicleDTO): Promise<void>;
  patch(params: PatchVehicleDTO): Promise<void>;
  delete(id: number): Promise<void>;
}
