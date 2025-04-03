import { DataSource } from "typeorm";
import path from "path";

export const dataSource = new DataSource({
  type: "sqlite",
  database: path.resolve(__dirname, "..", "database.sqlite"),
  entities: [path.resolve(__dirname, "entities", "*{.js,.ts}")],
  migrations: [path.resolve(__dirname, "migrations", "*{.js,.ts}")],
  synchronize: false,
});
