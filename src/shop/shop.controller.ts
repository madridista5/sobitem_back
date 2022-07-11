import { Controller, Delete, Get, Inject, Param } from "@nestjs/common";
import { ShopService } from "./shop.service";
import { GetListOfShopsResponse, GetOneShopResponse } from "../types";

@Controller('api/shop')
export class ShopController {

  constructor(@Inject(ShopService) private shopService: ShopService) {
  }

  @Get('/')
  listAllShops(): Promise<GetListOfShopsResponse> {
    return this.shopService.getShops();
  }

  @Get('/:id')
  listOneShop(@Param('id') id: string): Promise<GetOneShopResponse> {
    return this.shopService.getOneShop(id);
  }

  @Delete('/:id')
  removeShop(@Param('id') id: string): Promise<void> {
    return this.shopService.removeShop(id);
  }

  // @Post('/add')
  // addShop(@Body() req: AddShopDto): Promise<void> {
  //   return this.shopService.addShop(req);
  // }
}
