import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { AtStrategy, RtStrategy } from './strategies'
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [JwtModule.register({})],
    controllers: [AuthController],
    providers: [AuthService, AtStrategy, RtStrategy],
    exports: [AuthService, JwtModule]
})
export class AuthModule {}
