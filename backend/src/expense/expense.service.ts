import { BadRequestException, Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateExpenseDto } from './dto/create-expense.dto'
import { Category, Expense } from '@prisma/client'
import { ExpenseCategory } from './types'
import { ExpenseByDateService } from './sub-services/expenseByDate.service'
import { ExpenseRepository } from './sub-services/expense.repository'

@Injectable()
export class ExpenseService {
    constructor(
        private prisma: PrismaService,
        private byDateService: ExpenseByDateService,
        private expenseRepository: ExpenseRepository,
    ) {}

    async createExpense(userId: number, dto: CreateExpenseDto) {
        return this.expenseRepository.createNewExpense(userId, dto)
    }

    async getSummarizedExpenses(dateFilter: string = 'today', userId: number) {
        let categoryWithExp: Category[]

        switch (dateFilter) {
            case 'today': {
                categoryWithExp = await this.byDateService.getExpensesTodayByCategory(userId)
                break
            }
            case 'month': {
                categoryWithExp = await this.byDateService.getExpensesInCurrentMonthByCategory(userId)
                break
            }
            case 'year': {
                categoryWithExp = await this.byDateService.getExpensesInCurrentYear(userId)
                break
            }
            case 'all': {
                categoryWithExp = await this.byDateService.getAllTimeExpenseByCategory(userId)
                break
            }
            default:
                return new BadRequestException({}, 'Something wen wrong')
        }

        return this.SumExpenses(categoryWithExp)
    }

    async getAllTimeExpenseInEachCategory(userId: number) {
        const expenses = await this.byDateService.getAllTimeExpenseByCategory(userId)

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

    private
}
