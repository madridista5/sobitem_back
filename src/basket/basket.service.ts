import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { AddProductBasketDto } from "./dto/add-product-basket.dto";
import { ProductService } from "../product/product.service";
import { GetTotalPriceResponse, ListProductsInBasketResponse } from "../types";
import { ProductInBasket } from "./product-in-basket.entity";
import { ProductRecord } from "../product/productRecord.entity";
import { User } from "../user/user.entity";
import { DataSource } from "typeorm";
import { from } from "rxjs";

@Injectable()
export class BasketService {

  constructor(
    @Inject(forwardRef(() => ProductService)) private productService: ProductService,
    @Inject(DataSource) private dataSource: DataSource,
    ) {
  }

  async addProductToBasket(item: AddProductBasketDto, user: User): Promise<void> {
    const {name, price, count, productId} = item;

    // uaktualnienie produktu - zmniejszenie count o 1
    const productToDecreaseCount = await ProductRecord.find({where: {id: productId}});
    productToDecreaseCount[0].count--;
    await productToDecreaseCount[0].save();

    const newItem = new ProductInBasket();
    newItem.name = name;
    newItem.price = price;
    newItem.count = 1;
    newItem.productId = productId;
    newItem.user = user;
    await newItem.save();
  }


  async deleteItemFromBasket(id: string): Promise<void> {
    // uaktualnienie produtku - zwiększenie count o 1
    const productToDeleteFromBasket = await ProductInBasket.find({where: { id }});
    const productId = productToDeleteFromBasket[0].productId;
    const productToIncreaseCount = await ProductRecord.find({where: {id: productId}});
    productToIncreaseCount[0].count++;
    await productToIncreaseCount[0].save();

    await ProductInBasket.delete(id);
  }

  async listProductsInOneUserBasket(user: User): Promise<ListProductsInBasketResponse> {
    const relation = await User.find({
      relations: ["itemsInBasket"],
    });
    const currentUser: User = relation.filter(currentUser => currentUser.id === user.id)[0];

    return currentUser.itemsInBasket;
  }

  async getTotalPriceOfBasket(user: User): Promise<GetTotalPriceResponse> {
    const sum =  (await this.listProductsInOneUserBasket(user))
      .map(el => Number(el.price))
      .reduce((prev, curr) => prev + curr, 0)
      .toFixed(2);
    return {
      sum,
    };
  }

  async buyNowAndClearBasket(user: User): Promise<void> {
    await this.dataSource
      .createQueryBuilder()
      .delete()
      .from(ProductInBasket)
      .where('userId = :id', {id: user.id})
      .execute();
  }
}
