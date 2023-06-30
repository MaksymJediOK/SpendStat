import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateExpenseDto } from './dto/create-expense.dto'
import { Category, Expense } from '@prisma/client'
import { ExpenseCategory } from './types'
import { ExpenseByDateService } from './sub-services/expenseByDate.service'

@Injectable()
export class ExpenseService {
    constructor(private prisma: PrismaService, private byDateService: ExpenseByDateService) {}

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
    //Todo specify the user | include statement
    // Todo move retrieving data to repository
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

        return this.SumExpenses(userCategories)
    }

    async getSumPairByCategory(userId: number) {
        const expenses = await this.byDateService.getExpensesInCurrentMonthByCategory(userId)
        return this.SumExpenses(expenses)
    }

    private SumExpenses(userCategories: Category[]) {
        const result: ExpenseCategory[] = userCategories.map(
            (category: Category & { expenses: Expense[] }) => {
                const expValues = this.getAllTimeExpensesValueInCategory(category.expenses)
                return {
                    categoryTitle: category.title,
                    expenseValue: expValues,
                }
            },
        )

        return result
    }

    private getAllTimeExpensesValueInCategory(expenses: Expense[]) {
        return expenses.reduce((acc: number, exp: Expense) => {
            return acc + exp.value
        }, 0)
    }
}
