// src/users/users.service.spec.ts

import { Test, TestingModule } from '@nestjs/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {

  let service: UsersService;

  beforeEach(async () => {

    const module: TestingModule =
      await Test.createTestingModule({
        providers: [UsersService],
      }).compile();

    service = module.get<UsersService>(
      UsersService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all users', () => {

    const users = service.findAll();

    expect(users.length).toBeGreaterThan(0);
  });

  it('should create user', () => {

    const user = service.create({
      name: 'Alex',
      email: 'alex@example.com',
    });

    expect(user).toHaveProperty('id');
    expect(user.name).toBe('Alex');
  });

  it('should find one user', () => {

    const user = service.findOne(1);

    expect(user).toBeDefined();
    expect(user?.id).toBe(1);
  });
});