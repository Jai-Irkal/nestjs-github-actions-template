import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {

    private products = [
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

    findAll() {
        return this.products;
    }

    create(product: any) {
        const newProduct = {
            id: this.products.length + 1,
            ...product,
        };

        this.products.push(newProduct);

        return newProduct;
    }
}
