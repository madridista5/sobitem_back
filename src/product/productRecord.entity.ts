import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ProductInterface } from "../types";

@Entity()
export class ProductRecord extends BaseEntity implements ProductInterface {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 30,
  })
  name: string;

  @Column({
    type: 'decimal',
    precision: 8,
    scale: 2,
  })
  price: number;

  @Column({
    type: 'int',
  })
  count: number;

  @Column({
    length: 100,
    default: null,
    nullable: true,
  })
  description: string | null;

  @Column({
    length: 36,
  })
  shop_id: string;
}