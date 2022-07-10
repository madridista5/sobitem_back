import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { ShopService } from "../shop/shop.service";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductRecord } from "./productRecord.entity";
import { Repository } from "typeorm";
import { GetListOfProductsResponse, GetOneProductResponse } from "../types";
import { AddProductDto } from "./dto/add-product.dto";

@Injectable()
export class ProductService {
  constructor(
    @Inject(forwardRef(() => ShopService)) private shopService: ShopService,
    @InjectRepository(ProductRecord) private productRecordRepository: Repository<ProductRecord>,
  ) {
  }

  async getProducts(): Promise<GetListOfProductsResponse> {
    return await this.productRecordRepository.find();
  }

  async getOneProduct(id: string): Promise<GetOneProductResponse> {
    return await this.productRecordRepository.findOneOrFail({where: {id}});
  }

  async removeProduct(id: string): Promise<void> {
    await this.productRecordRepository.delete(id);
  }

  async addProduct(req: AddProductDto): Promise<void> {
    // TODO: add shop_id
    await this.productRecordRepository.insert(req);
  }
}
