import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateUserDto } from './dto'
import { hashPassword } from './helpers/hashPassword'
import { Tokens } from './types';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}

    async signUpLocal(dto: CreateUserDto): Promise<Tokens> {
        const hash = await hashPassword(dto.password)
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                username: dto.username,
                password: hash,
            },
        })


    }
    signInLocal() {}
    logout() {}
    refreshTokens() {}
}
