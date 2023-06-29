import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateExpenseDto } from './dto/create-expense.dto'
import { Category, Expense } from '@prisma/client'
import { ExpenseCategory } from './types'

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
    //Todo specify the user | include statement

    async getAllTimeExpenseInEachCategory(userId: number) {
        const userCategories: Category[] = await this.prisma.category.findMany({
            where: {
                User: {
                    id: userId,
                },
            },
            include: {
                expenses: true,
            },
        })

        const result: ExpenseCategory[] = userCategories.map((category: Category) => {
            return {
                categoryTitle: category.title,
                expenseValue: 1
            }
        })
    }

    async getAllTimeExpensesValueInCategory(expenses: Expense[]): Promise<number> {
        return expenses.reduce((acc: number, exp: Expense) => {
            return acc + exp.value
        }, 0)
    }

    // private async getAllExpensesInCategory(categoryId: number): Promise<Expense[]> {
    //     return this.prisma.expense.findMany({
    //         where: {
    //             Category: {
    //                 id: categoryId,
    //             },
    //         },
    //     })
    // }
}
