import { CreateUserDTO } from './dto/createUser.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): {
        _id: string;
        name: string;
        age: number;
        gender: string;
        isActive: boolean;
        email: string;
        phone: string;
    }[];
    createUSer(createUserDTO: CreateUserDTO): Promise<any>;
}
