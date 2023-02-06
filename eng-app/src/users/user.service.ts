
import { Injectable,UseFilters } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { users } from 'src/moks';
import { CreateUserDTO } from './dto/createUser.dto';
import { NoDataExeptionFilter } from './user.filter';
import { NoDataExeption } from './user.exeptions';
import { UserEntity } from './user.entitiy';

@Injectable()
export class UserService {
    private readonly users: User[] = users;
    
    @UseFilters(new NoDataExeptionFilter())
    getUsers() {
        if(this.users == null) {
            throw new NoDataExeption();
        }
        return this.users;
    }

    async createUser(createUserDTO: CreateUserDTO) {
        const newUser = new UserEntity();
        Object.assign(newUser, createUserDTO)
        console.log('newUser', newUser);
        return createUserDTO;
    }
}

