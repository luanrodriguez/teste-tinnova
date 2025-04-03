import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateVehiclesTable1743613700126 implements MigrationInterface {
    name = 'CreateVehiclesTable1743613700126'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vehicles" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "brand" varchar NOT NULL, "year" integer NOT NULL, "description" text NOT NULL, "sold" boolean NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "vehicles"`);
    }

}
