import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { PrismaModule } from './prisma/prisma.module'
import { CategoriesController } from './categories/categories.controller'
import { CategoriesService } from './categories/categories.service'
import { CategoriesModule } from './categories/categories.module'
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'
import { AtGuard } from './common/guards'
import { ExpenseModule } from './expense/expense.module';

@Module({
    controllers: [CategoriesController],
    providers: [
        PrismaService,
        CategoriesService,
        {
            provide: 'APP_GUARD',
            useClass: AtGuard,
        },
    ],
    imports: [PrismaModule, CategoriesModule, UserModule, AuthModule, ExpenseModule],
})
export class AppModule {}
