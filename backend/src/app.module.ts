import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { PrismaModule } from './prisma/prisma.module'
import { CategoriesController } from './categories/categories.controller';
import { CategoriesService } from './categories/categories.service';
import { CategoriesModule } from './categories/categories.module';
import { UserModule } from './user/user.module';

@Module({
    controllers: [CategoriesController],
    providers: [PrismaService, CategoriesService],
    imports: [PrismaModule, CategoriesModule, UserModule],
})
export class AppModule {}
