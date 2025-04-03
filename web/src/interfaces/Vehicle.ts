export interface Vehicle {
  id: number;
  name: string;
  brand: string;
  year: number;
  description: string;
  sold: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
