import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AddProductBasketDto } from "./dto/add-product-basket.dto";
import { User } from "../user/user.entity";

@Entity()
export class ProductInBasket extends BaseEntity implements AddProductBasketDto {
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
    length: 36,
  })
  productId: string;

  @ManyToOne(type => User, entity => entity.itemsInBasket)
  @JoinColumn()
  user: User;
}