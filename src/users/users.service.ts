// src/users/users.service.ts

import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';

interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UsersService {

  private users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
    },
  ];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User | undefined {
    return this.users.find(
      (user) => user.id === id,
    );
  }

  create(user: CreateUserDto): User {

    const newUser: User = {
      id: this.users.length + 1,
      ...user,
    };

    this.users.push(newUser);

    return newUser;
  }
}