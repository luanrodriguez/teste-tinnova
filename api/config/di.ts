import Container from "typedi";
import { VehiclesTypeormRepository } from "../infra/database/typeorm/repositories/vehicles.typeorm";

export const configure = () => {
  Container.set("VehiclesRepository", new VehiclesTypeormRepository());

  console.log("Dependency injection configured!");
};
