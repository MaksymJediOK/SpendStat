import { ForbiddenException, Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateUserDto } from './dto'
import { JwtPayload, Tokens } from './types'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwtService: JwtService) {}
    async signUpLocal(dto: CreateUserDto): Promise<Tokens> {
        const hash = await this.hashData(dto.password)
        const user = await this.prisma.user
            .create({
                data: {
                    email: dto.email,
                    username: dto.username,
                    password: hash,
                },
            })
            .catch((error) => {
                if (error instanceof PrismaClientKnownRequestError) {
                    if (error.code === 'P2002') {
                        throw new ForbiddenException('Credentials incorrect')
                    }
                }
                throw error
            })
        const tokens = await this.getTokens(user.id, user.email)
        await this.updateRtHash(user.id, tokens.refresh_token)

        return tokens
    }
    async signInLocal(dto: CreateUserDto): Promise<Tokens> {
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email,
            },
        })

        if (!user) throw new ForbiddenException('Access denied')

        const passwordEqual = await bcrypt.compare(dto.password, user.password)
        if (!passwordEqual) throw new ForbiddenException('Access denied')

        const tokens = await this.getTokens(user.id, user.email)
        await this.updateRtHash(user.id, tokens.refresh_token)
        return tokens
    }
    async logout(userId: number) {
        this.prisma.user.updateMany({
            where: {
                id: userId,
                hashedRt: {
                    not: null,
                },
            },
            data: {
                hashedRt: null,
            },
        })

        return true
    }
    async refreshTokens(userId: number, rt: string) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: userId,
            },
        })
        if (!user || !user.hashedRt) throw new ForbiddenException('Access denied')

        const rtMatches: boolean = await bcrypt.compare(rt, user.hashedRt)
        if (!rtMatches) throw new ForbiddenException('Access denied')

        const tokens = await this.getTokens(user.id, user.email)
        await this.updateRtHash(user.id, tokens.refresh_token)
        return tokens
    }

    private async getTokens(userId: number, email: string): Promise<Tokens> {
        const jwtPayload: JwtPayload = {
            sub: userId,
            email: email,
        }

        const [at, rt] = await Promise.all([
            this.jwtService.signAsync(jwtPayload, {
                secret: 'at-secret',
                expiresIn: '1d',
            }),
            this.jwtService.signAsync(jwtPayload, {
                secret: 'rt-secret',
                expiresIn: '7d',
            }),
        ])

        return {
            access_token: at,
            refresh_token: rt,
        }
    }

    private async updateRtHash(userId: number, rt: string) {
        const hash = await this.hashData(rt)
        await this.prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                hashedRt: hash,
            },
        })
    }

    private async hashData(data: string) {
        return await bcrypt.hash(data, 5)
    }
}
