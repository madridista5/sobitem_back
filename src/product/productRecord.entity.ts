import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProductInterface } from "../types";
import { ShopRecord } from "../shop/shopRecord.entity";

@Entity()
export class ProductRecord extends BaseEntity implements ProductInterface {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    length: 30
  })
  name: string;

  @Column({
    type: "decimal",
    precision: 8,
    scale: 2
  })
  price: number;

  @Column({
    type: "int"
  })
  count: number;

  @Column({
    length: 100,
    default: null,
    nullable: true
  })
  description: string | null;

  @ManyToOne(type => ShopRecord, entity => entity.id, {
    onUpdate: "CASCADE",
  })
  @JoinColumn()
  shop: ShopRecord;
}