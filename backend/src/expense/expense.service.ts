import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateExpenseDto } from './dto/create-expense.dto'

@Injectable()
export class ExpenseService {
    constructor(private prisma: PrismaService) {}

    async createNewExpense(userId: number, dto: CreateExpenseDto) {
        return this.prisma.expense.create({
            data: {
                title: dto.title,
                value: dto.value,
                User: {
                    connect: { id: userId },
                },
            },
        })
    }


}
