import { Injectable } from '@nestjs/common';
import { users } from '../moks';
import { CreateUserDTO } from './dto/createUser.dto';

@Injectable()
export class UserService {
    getUsers() {
        return users;
    }
    async createUser(createUserDTO: CreateUserDTO) {
        return createUserDTO;
    }
}
