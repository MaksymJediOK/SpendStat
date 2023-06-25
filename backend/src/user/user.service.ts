import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}

    async getAllUser() {
        const users = await this.prisma.user.findMany()
        return users
    }

    async createUser(dto: CreateUserDto) {
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                username: dto.username,
                password: dto.password,
            },
        })

        return user
    }
}
