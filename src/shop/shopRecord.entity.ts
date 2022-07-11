import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ShopInterface } from "../types";
import { ProductRecord } from "../product/productRecord.entity";
import { User } from "../user/user.entity";

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

  @OneToOne(type => User)
  @JoinColumn()
  user_id: User;
}