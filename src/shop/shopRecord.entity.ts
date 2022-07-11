import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ShopInterface } from "../types";
import { ProductRecord } from "../product/productRecord.entity";

@Entity()
export class ShopRecord extends BaseEntity implements ShopInterface {
  @OneToMany(type => ProductRecord, entity => entity.shop_id)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 30,
  })
  name: string;

  @Column({
    length: 30,
  })
  category: string;

  @Column({
    length: 100,
    default: null,
    nullable: true,
  })
  url: string | null;

  @Column({
    length: 100,
  })
  address: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 7,
  })
  lat: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 7,
  })
  lon: number;

  @Column({
    length: 36,
    default: null, // wyłączyć to później
    nullable: true, // wyłączyć to później
  })
  user_id: string | null;
}