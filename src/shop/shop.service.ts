import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { ProductService } from "../product/product.service";
import { ShopRecord } from "./shopRecord.entity";
import { GetListOfShopsResponse, GetOneShopResponse } from "../types";
import { DataSource } from "typeorm";
import { ProductRecord } from "../product/productRecord.entity";

@Injectable()
export class ShopService {
  constructor(
    @Inject(forwardRef(() => ProductService)) private productService: ProductService,
    @Inject(DataSource) private dataSource: DataSource,
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


  async getShopsWithTheProduct(productName: string): Promise<GetListOfShopsResponse> {
    const relation = await ProductRecord.find({
      relations: ['shop'],
    });
    return  relation
      .filter(product => product.name === productName)
      .map(shop => shop.shop);
  }
}
