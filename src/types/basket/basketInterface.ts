import { AddProductBasketDto } from "../../basket/dto/add-product-basket.dto";

export type ListProductsInBasketResponse = AddProductBasketDto[];
export type GetTotalPriceResponse = {
  sum: string;
}