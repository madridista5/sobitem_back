import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { ShopService } from "../shop/shop.service";
import { ProductRecord } from "./productRecord.entity";
import { GetListOfProductsResponse, GetOneProductResponse } from "../types";
import { AddProductDto } from "./dto/add-product.dto";

@Injectable()
export class ProductService {
  constructor(
    @Inject(
      forwardRef(() => ShopService)) private shopService: ShopService,
    ) {
  }

  async getProducts(): Promise<GetListOfProductsResponse> {
    return await ProductRecord.find();
  }

  async getOneProduct(id: string): Promise<GetOneProductResponse> {
    return await ProductRecord.findOneOrFail({ where: { id } });
  }

  async removeProduct(id: string): Promise<void> {
    await ProductRecord.delete(id);
  }

  async addProduct(req: AddProductDto): Promise<void> {
    // TODO: add shop_id
    await ProductRecord.insert(req);
  }

  async listAllProductsFromSingleShop(id: string): Promise<GetListOfProductsResponse> {
    return await ProductRecord.findBy({ shop: { id } });
  }

  async getProductsWithSearchName(productName: string): Promise<GetListOfProductsResponse> {
    const relation = await ProductRecord.find({
      relations: ["shop"]
    });
    return relation.filter(product => product.name === productName);
  }

  // methods for basket (38:54 dzień 15)
  async hadProduct(id: string): Promise<boolean> {
    return (await this.getProducts()).some(product => product.id === id);
  }

}
