import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { CreateUserDto, signInUserDto } from './dto'
import { Tokens } from './types'
import { RtGuard } from '../common/guards'
import { GetCurrentUser, GetCurrentUserId, Public } from '../common/decorators'

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Public()
    @Post('/local/signup')
    @HttpCode(HttpStatus.CREATED)
    signUpLocal(@Body() dto: CreateUserDto): Promise<Tokens> {
        return this.authService.signUpLocal(dto)
    }

    @Public()
    @Post('/local/signin')
    @HttpCode(HttpStatus.OK)
    signInLocal(@Body() dto: signInUserDto): Promise<Tokens> {
        return this.authService.signInLocal(dto)
    }

    @Post('/logout')
    @HttpCode(HttpStatus.OK)
    logout(@GetCurrentUserId() userId: number): Promise<boolean> {
        return this.authService.logout(userId)
    }

    @Public()
    @UseGuards(RtGuard)
    @Post('/refresh')
    @HttpCode(HttpStatus.OK)
    refreshTokens(
        @GetCurrentUserId() userId: number,
        @GetCurrentUser('refreshToken') refreshToken: string,
    ) {
        return this.authService.refreshTokens(userId, refreshToken)
    }
}
