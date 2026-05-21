import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [
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

    findAll() {
        return this.users;
    }

    findOne(id: number) {
        return this.users.find((user) => user.id === id);
    }

    create(user: any) {
        const newUser = {
            id: this.users.length + 1,
            ...user,
        };

        this.users.push(newUser);

        return newUser;
    }
}
