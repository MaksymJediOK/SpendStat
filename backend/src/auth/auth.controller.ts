import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto';
import { Tokens } from './types';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }
  @Post('/local/signup')
  signUpLocal(@Body() dto: CreateUserDto ): Promise<Tokens> {
    this.authService.signUpLocal(dto)
  }
  @Post('/local/signin')
  signInLocal() {
    this.authService.signInLocal()
  }
  @Post('/logout')
  logout() {
      this.authService.logout()
  }
  @Post('/refresh')
  refreshTokens() {
    this.authService.refreshTokens()
  }
}
