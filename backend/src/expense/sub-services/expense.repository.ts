import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { CreateExpenseDto } from '../dto/create-expense.dto'
import { UpdateExpenseDto } from '../dto/update-expense.dto'

@Injectable()
export class ExpenseRepository {
    constructor(private prisma: PrismaService) {}

    async createNewExpense(userId: number, dto: CreateExpenseDto) {
        return this.prisma.expense.create({
            data: {
                title: dto.title,
                value: dto.value,
                User: {
                    connect: { id: userId },
                },
                Category: {
                    connect: { id: dto.categoryId },
                },
            },
        })
    }

    async updateExpense(expenseId: number, updateDto: UpdateExpenseDto) {
        const existingExp = await this.prisma.expense.findUnique({
            where: {
                id: expenseId,
            },
        })
        return this.prisma.expense.update({
            where: {
                id: expenseId,
            },
            data: {
                ...existingExp,
                ...updateDto,
            },
        })
    }
}
