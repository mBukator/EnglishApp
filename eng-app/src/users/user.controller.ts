import { Body, Controller, Get, Post} from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService){}
    @Get('get-all-users')
    getUsers() {
        return this.userService.getUsers()
    }
    @Post('create-user')
    async createUSer(@Body('user') createUserDTO: CreateUserDTO): Promise<any> {
        console.log('createUserDTO',createUserDTO);
        return this.userService.createUser(createUserDTO);
    }
}
