import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }
    
    @Get()
    getUsers() {
        return this.usersService.findAll();
    }

    @Get(':id')
    getUser(@Param('id') id: string) {
        return this.usersService.findOne(Number(id));
    }

    @Post()
    createUser(@Body() body: any) {
        return this.usersService.create(body);
    }
}
