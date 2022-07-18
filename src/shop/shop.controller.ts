import { Body, Controller, Delete, Get, Inject, Param, Post, UseGuards } from "@nestjs/common";
import { ShopService } from "./shop.service";
import { GetListOfShopsResponse, GetOneShopResponse } from "../types";
import { AddShopDto } from "./dto/add-shop.dto";
import { UserObj } from "../decorators/userobj.decorator";
import { User } from "../user/user.entity";
import { AuthGuard } from "@nestjs/passport";

@Controller('api/shop')
export class ShopController {

  constructor(@Inject(ShopService) private shopService: ShopService) {
  }

  @Get('/allShops')
  listAllShops(): Promise<GetListOfShopsResponse> {
    return this.shopService.getShops();
  }

  @Get('/allShops/:productName')
  listAllShopsWithTheProduct(@Param('productName') productName: string): Promise<GetListOfShopsResponse> {
    return this.shopService.getShopsWithTheProduct(productName);
  }

  @Get('/oneShop/:id')
  listOneShop(@Param('id') id: string): Promise<GetOneShopResponse> {
    return this.shopService.getOneShop(id);
  }

  @Delete('/:id')
  removeShop(@Param('id') id: string): Promise<void> {
    return this.shopService.removeShop(id);
  }

  @Post('/add')
  @UseGuards(AuthGuard('jwt'))
  addShop(
    @Body() req: AddShopDto,
    @UserObj() user: User,
    ): Promise<void> {
    return this.shopService.addShop(req, user);
  }
}
