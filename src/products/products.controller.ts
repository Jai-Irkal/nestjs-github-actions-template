import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) { }

    @Get()
    getProducts() {
        return this.productsService.findAll();
    }

    @Post()
    createProduct(@Body() body: any) {
        return this.productsService.create(body);
    }
}
