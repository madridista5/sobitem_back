import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { ProductService } from "../product/product.service";
import { ShopRecord } from "./shopRecord.entity";
import { GetListOfShopsResponse, GetOneShopResponse } from "../types";
import { DataSource } from "typeorm";
import { ProductRecord } from "../product/productRecord.entity";
import { AddShopDto } from "./dto/add-shop.dto";
import { User } from "../user/user.entity";

@Injectable()
export class ShopService {
  constructor(
    @Inject(forwardRef(() => ProductService)) private productService: ProductService,
    @Inject(DataSource) private dataSource: DataSource,
  ) {}

  async getShops(): Promise<GetListOfShopsResponse> {
    return await ShopRecord.find();
  }

  async getShopsLoggedUser(user: User): Promise<GetListOfShopsResponse> {
    const relation = await ShopRecord.find({
      relations: ['user_id'],
    });
    return relation.filter(shop => shop.user_id.id === user.id);
  }

  async getOneShop(id: string): Promise<GetOneShopResponse> {
    return await ShopRecord.findOneOrFail({where: {id}});
  }

  async removeShop(id: string): Promise<void> {
    await ShopRecord.delete(id);
  }

  async addShop(req: AddShopDto, user: User): Promise<void> {
    const newShop = new ShopRecord();
    newShop.name = req.name;
    newShop.category = req.category;
    newShop.url = req.url;
    newShop.address = req.address;
    newShop.user_id = user;
    newShop.lon = req.lon;
    newShop.lat = req.lat;
    await newShop.save();
  }


  async getShopsWithTheProduct(productName: string): Promise<GetListOfShopsResponse> {
    const relation = await ProductRecord.find({
      relations: ['shop'],
    });
    return  relation
      .filter(product => product.name === productName)
      .map(shop => shop.shop);
  }
}
