import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { AddProductBasketDto } from "./dto/add-product-basket.dto";
import { ProductService } from "../product/product.service";
import { GetTotalPriceResponse, ListProductsInBasketResponse } from "../types";
import { ProductInBasket } from "./product-in-basket.entity";

@Injectable()
export class BasketService {

  constructor(@Inject(forwardRef(() => ProductService)) private productService: ProductService) {
  }

  async addProductToBasket(item: AddProductBasketDto): Promise<void> {
    const {name, price, count, productId} = item;

    // uaktualnienie produktu - zmniejszenie count o 1
    // const productItem = await this.productService.getOneProduct(productId);
    // productItem.count--;
    // await this.productService.updateOne(productItem.id, productItem.count);

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
