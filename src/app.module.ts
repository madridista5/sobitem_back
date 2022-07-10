import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopModule } from './shop/shop.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ShopModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
