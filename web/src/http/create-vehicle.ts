import { Vehicle } from "../interfaces/Vehicle";
import { apiUrl } from "./api-url";

interface Params {
  name: string;
  brand: string;
  year: number;
  description: string;
  sold: boolean;
}

export const createVehicle = async (params: Params): Promise<Vehicle> => {
  const response = await apiUrl.post<Vehicle>("/vehicles", params);

  return response.data;
};
