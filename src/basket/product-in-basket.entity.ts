import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AddProductBasketDto } from "./dto/add-product-basket.dto";

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
}