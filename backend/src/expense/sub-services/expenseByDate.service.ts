import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { Expense } from '@prisma/client'

@Injectable()
export class ExpenseByDateService {
    private currentDate = new Date()
    private currentYear = this.currentDate.getFullYear()
    private currentMonth = this.currentDate.getMonth() + 1
    constructor(private prisma: PrismaService) {}

    async getAllExpensesInCurrentMonth(userId: number): Promise<Expense[]> {
        const expenses = await this.prisma.expense.findMany({
            where: {
                User: {
                    id: userId,
                },
                createdAt: {
                    gte: new Date(this.currentYear, this.currentMonth - 1, 1),
                    lt: new Date(this.currentYear, this.currentMonth, 1),
                },
            },
        })

        return expenses
    }

    async getExpensesInCurrentMonthByCategory(userId: number) {
        const expenses = await this.prisma.category.findMany({
            where: {
                User: {
                    id: userId,
                },
            },
            include: {
                expenses: {
                    where: {
                        createdAt: {
                            gte: new Date(this.currentYear, this.currentMonth - 1, 1),
                            lt: new Date(this.currentYear, this.currentMonth, 1),
                        },
                    },
                },
            },
        })

        return expenses
    }
}
