import { forwardRef, Module } from "@nestjs/common";
import { BasketController } from './basket.controller';
import { BasketService } from './basket.service';
import { ProductModule } from "../product/product.module";

@Module({
  imports: [forwardRef(() => ProductModule)],
  controllers: [BasketController],
  providers: [BasketService]
})
export class BasketModule {}