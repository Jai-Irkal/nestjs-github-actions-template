// src/products/products.controller.spec.ts

import { Test, TestingModule } from '@nestjs/testing';

import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

interface Product {
  id: number;
  name: string;
  price: number;
}

describe('ProductsController', () => {

  let controller: ProductsController;

  beforeEach(async () => {

    const module: TestingModule =
      await Test.createTestingModule({
        controllers: [ProductsController],
        providers: [ProductsService],
      }).compile();

    controller = module.get<ProductsController>(
      ProductsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return products', () => {

    const products: Product[] =
      controller.getProducts();

    expect(products.length).toBeGreaterThan(0);
  });
});