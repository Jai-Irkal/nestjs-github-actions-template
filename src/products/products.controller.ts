import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';

import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {

  constructor(
    private readonly productsService: ProductsService,
  ) {}

  @Get()
  public getProducts(): any {
    return this.productsService.findAll();
  }

  @Post()
  public createProduct(
    @Body() body: CreateProductDto,
  ): any {
    return this.productsService.create(body);
  }
}