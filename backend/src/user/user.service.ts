import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}

    async getAllUser() {
        const users = await this.prisma.user.findMany()
        return users
    }

    async getUserByEmail(userEmail: string) {
        return this.prisma.user.findFirst({
            where: {
                email: userEmail,
            },
        })
    }
}
