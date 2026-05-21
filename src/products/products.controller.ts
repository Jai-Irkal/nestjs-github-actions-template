// src/products/products.controller.ts

import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';

import {
  Product,
  ProductsService,
} from './products.service';

import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {

  constructor(
    private readonly productsService: ProductsService,
  ) {}

  @Get()
  getProducts(): Product[] {
    return this.productsService.findAll();
  }

  @Post()
  createProduct(
    @Body() body: CreateProductDto,
  ): Product {

    return this.productsService.create(body);
  }
}