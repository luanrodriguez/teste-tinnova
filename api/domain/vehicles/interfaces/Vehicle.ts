export interface Vehicle {
  id: number;
  name: string;
  brand: string;
  year: number;
  description: string;
  sold: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
