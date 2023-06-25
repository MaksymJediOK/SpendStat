import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { PrismaModule } from './prisma/prisma.module'

@Module({
    controllers: [],
    providers: [PrismaService],
    imports: [PrismaModule],
})
export class AppModule {}
