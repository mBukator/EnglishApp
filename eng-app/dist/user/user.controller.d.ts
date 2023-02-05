import { UserService } from 'users/user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): any;
    createUSer(): Promise<any>;
}
