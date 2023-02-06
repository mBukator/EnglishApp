import { User } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/createUser.dto';
export declare class UserService {
    private users;
    getUsers(): User[];
    createUser(createUserDTO: CreateUserDTO): Promise<CreateUserDTO>;
}
