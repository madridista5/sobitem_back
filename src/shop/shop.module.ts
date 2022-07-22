import { forwardRef, Module } from "@nestjs/common";
import { ShopController } from "./shop.controller";
import { ShopService } from "./shop.service";
import { ProductModule } from "../product/product.module";

@Module({
  imports: [
    forwardRef(() => ProductModule)
  ],
  controllers: [ShopController],
  providers: [ShopService],
  exports: [ShopService]
})
export class ShopModule {
}
