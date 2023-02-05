import { Injectable,UseFilters } from '@nestjs/common';
import { User } from 'src/interfaces/user.interface';
import { users } from 'src/moks';
import { NoDataExeptionFilter } from './user.filter';
import { NoDataExeption } from './user.exeptions';

@Injectable()
export class UserService {
    private readonly users: User[] = users;
    @UseFilters(new NoDataExeptionFilter())
    getUsers() {
        if(users == null) {
            throw new NoDataExeption();
        }
        return this.users;
    }
}
