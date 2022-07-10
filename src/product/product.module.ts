import { Module, forwardRef } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ShopModule } from "../shop/shop.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductRecord } from "./productRecord.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductRecord]),
    forwardRef(() => ShopModule),
  ],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
