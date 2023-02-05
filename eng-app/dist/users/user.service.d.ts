import { CreateUserDTO } from './dto/createUser.dto';
export declare class UserService {
    getUsers(): {
        _id: string;
        name: string;
        age: number;
        gender: string;
        isActive: boolean;
        email: string;
        phone: string;
    }[];
    createUser(createUserDTO: CreateUserDTO): Promise<CreateUserDTO>;
}
