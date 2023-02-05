import { CreateUserDTO } from './dto/createUser.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): import("./interfaces/user.interface").User[];
    createUSer(createUserDTO: CreateUserDTO): Promise<any>;
}
