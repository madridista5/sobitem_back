import { ShopRecord } from "../../shop/shopRecord.entity";

export interface ProductInterface {
  id: string;
  name: string;
  price: number;
  count: number;
  description: string | null;
  shop_id: ShopRecord;
}

export type GetListOfProductsResponse = ProductInterface[];
export type GetOneProductResponse = ProductInterface;