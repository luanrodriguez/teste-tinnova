import * as HttpServer from "./infra/web/fastify";
import { dataSource } from "./infra/database/typeorm/connection";

export const app = async () => {
  try {
    console.log("Starting database...");
    await dataSource.initialize();
    console.log("Database started!");
    await HttpServer.start();
  } catch (error) {
    console.error("Error when trying to start the application", error);
  }
};

app();
