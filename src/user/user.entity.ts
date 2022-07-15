import { BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ShopRecord } from "../shop/shopRecord.entity";
import { ProductInBasket } from "../basket/product-in-basket.entity";

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 255,
  })
  email: string;

  @Column()
  pwdHash: string;

  @Column({
    nullable: true,
    default: null,
  })
  currentTokenId: string | null;

  @OneToOne(type => ShopRecord)
  shopRecord: ShopRecord;

  @OneToMany(type => ProductInBasket, entity => entity.user)
  itemsInBasket: ProductInBasket[];
}