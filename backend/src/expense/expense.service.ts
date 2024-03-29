import { BadRequestException, Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateExpenseDto } from './dto/create-expense.dto'
import { Category, Expense } from '@prisma/client'
import { ExpenseCategory } from './types'
import { ExpenseByDateService } from './sub-services/expenseByDate.service'
import { ExpenseRepository } from './sub-services/expense.repository'
import { UpdateExpenseDto } from './dto/update-expense.dto'

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

    async updateExpense(expenseId: number, updateDto: UpdateExpenseDto) {
        return this.expenseRepository.updateExpense(expenseId, updateDto)
    }

    async getSummarizedExpenses(dateFilter: string = 'today', userId: number) {
        let categoryWithExp: Category[]

        switch (dateFilter) {
            case 'today': {
                categoryWithExp = await this.byDateService.getExpensesTodayByCategory(userId)
                break
            }
            case 'week': {
                categoryWithExp = await this.byDateService.getExpenseInCurrentWeek(userId)
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
                return new BadRequestException({}, 'Something went wrong')
        }

        return this.SumExpenses(categoryWithExp)
    }

    async totalExpenses(userId: number) {
        const byCategories = await this.byDateService.getAllTimeExpenseByCategory(userId)
        const summarized = this.SumExpenses(byCategories)

        if (summarized) {
            return summarized.reduce((acc, exp: ExpenseCategory) => {
                return acc + exp.expenseValue
            }, 0)
        }
        return new BadRequestException({}, 'Something went wrong')
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
                    categoryId: category.id,
                    categoryTitle: category.title,
                    expenseValue: expValues,
                    color: category.color,
                    icon: category.icon,
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
