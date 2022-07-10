import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { ProductService } from "../product/product.service";
import { InjectRepository } from "@nestjs/typeorm";
import { ShopRecord } from "./shopRecord.entity";
import { Repository } from "typeorm";
import { GetListOfShopsResponse, GetOneShopResponse } from "../types";

@Injectable()
export class ShopService {
  constructor(
    @Inject(forwardRef(() => ProductService)) private productService: ProductService,
    @InjectRepository(ShopRecord) private shopRecordRepository: Repository<ShopRecord>,
  ) {}

  async getShops(): Promise<GetListOfShopsResponse> {
    return await this.shopRecordRepository.find();
  }

  async getOneShop(id: string): Promise<GetOneShopResponse> {
    return await this.shopRecordRepository.findOneOrFail({where: {id}});
  }

  async removeShop(id: string): Promise<void> {
    await this.shopRecordRepository.delete(id);
  }

  // TODO install map and use method which can do: address => lat, lon
  // async addShop(req: AddShopDto): Promise<void> {
  //   console.log(req);
  //   await this.shopRecordRepository.insert(req);
  // }
}
