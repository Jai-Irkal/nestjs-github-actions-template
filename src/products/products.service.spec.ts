import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {

    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all products', () => {

    const products = service.findAll();

    expect(products.length).toBeGreaterThan(0);
  });

  it('should create a product', () => {

    const product = service.create({
      name: 'Tablet',
      price: 500,
    });

    expect(product).toHaveProperty('id');
    expect(product.name).toBe('Tablet');
  });
});
