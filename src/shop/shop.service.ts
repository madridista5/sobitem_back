import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { ProductService } from "../product/product.service";
import { ShopRecord } from "./shopRecord.entity";
import { GetListOfShopsResponse, GetOneShopResponse } from "../types";

@Injectable()
export class ShopService {
  constructor(
    @Inject(forwardRef(() => ProductService)) private productService: ProductService,
  ) {}

  async getShops(): Promise<GetListOfShopsResponse> {
    return await ShopRecord.find();
  }

  async getOneShop(id: string): Promise<GetOneShopResponse> {
    return await ShopRecord.findOneOrFail({where: {id}});
  }

  async removeShop(id: string): Promise<void> {
    await ShopRecord.delete(id);
  }

  // TODO install map and use method which can do: address => lat, lon
  // async addShop(req: AddShopDto): Promise<void> {
  //   console.log(req);
  //   await this.shopRecordRepository.insert(req);
  // }
}
