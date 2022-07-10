import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { ShopService } from "../shop/shop.service";

@Injectable()
export class ProductService {
  constructor(
    @Inject(forwardRef(() => ShopService)) private shopService: ShopService
  ) {
  }
}
