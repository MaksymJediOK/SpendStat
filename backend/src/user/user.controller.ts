import { Body, Controller, Get, Post } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    @Get('')
    getUsers() {
        return this.userService.getAllUser()
    }

    @Post('')
    create(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto)
    }
}
