import { Body, Controller, Delete, Get, Inject, Param, Post } from "@nestjs/common";
import { ProductService } from "./product.service";
import { GetListOfProductsResponse, GetOneProductResponse } from "../types";
import { AddProductDto } from "./dto/add-product.dto";

@Controller("api/product")
export class ProductController {
  constructor(@Inject(ProductService) private productService: ProductService) {
  }

  @Get("/")
  listAllProducts(): Promise<GetListOfProductsResponse> {
    return this.productService.getProducts();
  }

  @Get("/allProducts")
  listAllProductsWithNoSearch(): Promise<GetListOfProductsResponse> {
    return this.productService.getProducts();
  }

  @Get("/allProducts/:productName")
  listAllProductsWithSearchName(@Param("productName") productName: string): Promise<GetListOfProductsResponse> {
    return this.productService.getProductsWithSearchName(productName);
  }

  @Get("/allProductsFromSingleShop/:id")
  listAllProductsFromSingleShop(@Param("id") id: string): Promise<GetListOfProductsResponse> {
    return this.productService.listAllProductsFromSingleShop(id);
  }

  @Get("/:id")
  listOneProduct(@Param("id") id: string): Promise<GetOneProductResponse> {
    return this.productService.getOneProduct(id);
  }

  @Delete("/:id")
  removeProduct(@Param("id") id: string): Promise<void> {
    return this.productService.removeProduct(id);
  }

  @Post("/add/:shopId")
  addProduct(
    @Body() req: AddProductDto,
    @Param("shopId") shopId: string
  ): Promise<void> {
    return this.productService.addProduct(req, shopId);
  }
}
