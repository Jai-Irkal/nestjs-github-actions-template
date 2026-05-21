import { Injectable } from '@nestjs/common';

import { CreateProductDto } from './dto/create-product.dto';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable()
export class ProductsService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 1200,
    },
    {
      id: 2,
      name: 'Phone',
      price: 800,
    },
  ];

  findAll(): Product[] {
    return this.products;
  }

  create(product: CreateProductDto): Product {

    const newProduct: Product = {
      id: this.products.length + 1,
      ...product,
    };

    this.products.push(newProduct);

    return newProduct;
  }
}