import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { AddProductBasketDto } from "./dto/add-product-basket.dto";
import { ProductService } from "../product/product.service";
import { GetTotalPriceResponse, ListProductsInBasketResponse } from "../types";
import { ProductInBasket } from "./product-in-basket.entity";
import { ProductRecord } from "../product/productRecord.entity";

@Injectable()
export class BasketService {

  constructor(@Inject(forwardRef(() => ProductService)) private productService: ProductService) {
  }

  async addProductToBasket(item: AddProductBasketDto): Promise<void> {
    const {name, price, count, productId} = item;

    // uaktualnienie produktu - zmniejszenie count o 1
    const productToDecreaseCount = await ProductRecord.find({where: {id: productId}});
    // if(productToDecreaseCount[0].count <= 0) {
    //   throw new Error('You cannot add product to basket.');
    // }
    productToDecreaseCount[0].count--;
    await productToDecreaseCount[0].save();

    const newItem = new ProductInBasket();
    newItem.name = name;
    newItem.price = price;
    newItem.count = 1;
    newItem.productId = productId;
    await newItem.save();
  }


  async deleteItemFromBasket(id: string): Promise<void> {
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
