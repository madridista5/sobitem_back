import { forwardRef, Module } from "@nestjs/common";
import { ShopController } from './shop.controller';
import { ShopService } from './shop.service';
import { ProductModule } from "../product/product.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ShopRecord } from "./shopRecord.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ShopRecord]),
    forwardRef(() => ProductModule),
  ],
  controllers: [ShopController],
  providers: [ShopService],
  exports: [ShopService],
})
export class ShopModule {}
