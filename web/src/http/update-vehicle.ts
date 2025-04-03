import { apiUrl } from "./api-url";

interface Params {
  id: number;
  name: string;
  brand: string;
  year: number;
  description: string;
  sold: boolean;
}

export const updateVehicle = async ({
  id,
  name,
  brand,
  description,
  sold,
  year,
}: Params): Promise<void> => {
  await apiUrl.put(`/vehicles/${id}`, { name, brand, description, sold, year });
};
