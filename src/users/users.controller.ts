// src/users/users.controller.ts

import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';

import {
  User,
  UsersService,
} from './users.service';

import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {

  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Get()
  getUsers(): User[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  getUser(
    @Param('id') id: string,
  ): User | undefined {

    return this.usersService.findOne(
      Number(id),
    );
  }

  @Post()
  createUser(
    @Body() body: CreateUserDto,
  ): User {

    return this.usersService.create(body);
  }
}