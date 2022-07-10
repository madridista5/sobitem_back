import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { ProductService } from "../product/product.service";

@Injectable()
export class ShopService {
  constructor(
    @Inject(forwardRef(() => ProductService)) private productService: ProductService
  ) {}
}
