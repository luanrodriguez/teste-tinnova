import { Vehicle } from "../interfaces/Vehicle";
import { apiUrl } from "./api-url";

export const getAllVehicles = async (): Promise<Vehicle[]> => {
  const response = await apiUrl.get<Vehicle[]>("/vehicles");

  return response.data;
};
