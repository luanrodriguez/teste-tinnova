import { apiUrl } from "./api-url";

export const removeVehicle = async (id: number): Promise<void> => {
  await apiUrl.delete(`/vehicles/${id}`);
};
