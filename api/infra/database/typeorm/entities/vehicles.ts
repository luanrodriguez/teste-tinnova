import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("vehicles")
export class Vehicles {
  @PrimaryGeneratedColumn({ name: "id", type: "integer" })
  id!: number;

  @Column({ name: "name", type: "varchar", nullable: false })
  name!: string;

  @Column({ name: "brand", type: "varchar", nullable: false })
  brand!: string;

  @Column({ name: "year", type: "integer", nullable: false })
  year!: number;

  @Column({ name: "description", type: "text", nullable: false })
  description!: string;

  @Column({ name: "sold", type: "boolean", nullable: false })
  sold!: boolean;

  @CreateDateColumn({ type: "datetime", name: "created_at" })
  createdAt!: Date;

  @UpdateDateColumn({ type: "datetime", name: "updated_at" })
  updatedAt!: Date;

  @DeleteDateColumn({
    type: "datetime",
    name: "deleted_at",
    nullable: true,
  })
  deletedAt!: Date | null;
}
