// src/users/users.controller.spec.ts

import { Test, TestingModule } from '@nestjs/testing';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {

  let controller: UsersController;

  beforeEach(async () => {

    const module: TestingModule =
      await Test.createTestingModule({
        controllers: [UsersController],
        providers: [UsersService],
      }).compile();

    controller = module.get<UsersController>(
      UsersController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return users', () => {

    const users = controller.getUsers();

    expect(users.length).toBeGreaterThan(0);
  });

  it('should return one user', () => {

    const user = controller.getUser('1');

    expect(user).toBeDefined();
    expect(user?.id).toBe(1);
  });
});