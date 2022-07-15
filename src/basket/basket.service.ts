import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { AddProductBasketDto } from "./dto/add-product-basket.dto";
import { ProductService } from "../product/product.service";
import { GetTotalPriceResponse, ListProductsInBasketResponse } from "../types";
import { ProductInBasket } from "./product-in-basket.entity";
import { ProductRecord } from "../product/productRecord.entity";
import { User } from "../user/user.entity";

@Injectable()
export class BasketService {

  constructor(@Inject(forwardRef(() => ProductService)) private productService: ProductService) {
  }

  async addProductToBasket(item: AddProductBasketDto): Promise<void> {
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
    await newItem.save();

    //test - zapisywanie przedmiotu do konkretnego użtkownika
    // newItem.user = user;
    // await newItem.save();
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

  async listProductsInBasket(): Promise<ListProductsInBasketResponse> {
    return await ProductInBasket.find();
  }

  async getTotalPriceOfBasket(): Promise<GetTotalPriceResponse> {
    const sum =  (await this.listProductsInBasket())
      .map(el => Number(el.price))
      .reduce((prev, curr) => prev + curr, 0)
      .toFixed(2);
    return {
      sum,
    };
  }

  async buyNowAndClearBasket(): Promise<void> {
    await ProductInBasket.delete({});
  }
}
