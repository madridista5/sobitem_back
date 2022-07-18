import { Body, Controller, Delete, Get, Inject, Param, Post, UseGuards } from "@nestjs/common";
import { AddProductBasketDto } from "./dto/add-product-basket.dto";
import { BasketService } from "./basket.service";
import { GetTotalPriceResponse, ListProductsInBasketResponse } from "../types";
import { AuthGuard } from "@nestjs/passport";
import { UserObj } from "../decorators/userobj.decorator";
import { User } from "../user/user.entity";

@Controller("api/basket")
export class BasketController {

  constructor(@Inject(BasketService) private basketService: BasketService) {
  }

  @Post("/")
  @UseGuards(AuthGuard("jwt"))
  addProductToBasket(
    @Body() item: AddProductBasketDto,
    @UserObj() user: User
  ) {
    return this.basketService.addProductToBasket(item, user);
  }

  @Delete("/:id")
  deleteItemFromBasket(
    @Param("id") id: string
  ): Promise<void> {
    return this.basketService.deleteItemFromBasket(id);
  }

  @Get("/")
  @UseGuards(AuthGuard("jwt"))
  listProductsInOneUserBasket(
    @UserObj() user: User,
  ): Promise<ListProductsInBasketResponse> {
    return this.basketService.listProductsInOneUserBasket(user);
  }

  @Get("/total-price")
  @UseGuards(AuthGuard("jwt"))
  getTotalPriceOfBasket(
    @UserObj() user: User,
  ): Promise<GetTotalPriceResponse> {
    return this.basketService.getTotalPriceOfBasket(user);
  }

  @Get("/clear-basket")
  buyNowAndClearBasket(): Promise<void> {
    return this.basketService.buyNowAndClearBasket();
  }
}
