import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { ShopService } from "../shop/shop.service";
import { ProductRecord } from "./productRecord.entity";
import { GetListOfProductsResponse, GetOneProductResponse } from "../types";
import { AddProductDto } from "./dto/add-product.dto";

@Injectable()
export class ProductService {
  constructor(
    @Inject(forwardRef(() => ShopService)) private shopService: ShopService,
  ) {
  }

  async getProducts(): Promise<GetListOfProductsResponse> {
    return await ProductRecord.find();
  }

  async getOneProduct(id: string): Promise<GetOneProductResponse> {
    return await ProductRecord.findOneOrFail({where: {id}});
  }

  async removeProduct(id: string): Promise<void> {
    await ProductRecord.delete(id);
  }

  async addProduct(req: AddProductDto): Promise<void> {
    // TODO: add shop_id
    await ProductRecord.insert(req);
  }
}
