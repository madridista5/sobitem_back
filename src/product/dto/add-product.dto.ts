import { ShopRecord } from "../../shop/shopRecord.entity";

export class AddProductDto {
  name: string;
  price: number;
  count: number;
  description?: string;
  shop_id: ShopRecord;
}