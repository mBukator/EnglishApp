import { Injectable } from '@nestjs/common';
import { User } from 'src/interfaces/user.interface';
import { users } from 'src/moks';
@Injectable()
export class UserService {
    private readonly users: User[] = users;

    getUsers() {
        return this.users;
    }
}
