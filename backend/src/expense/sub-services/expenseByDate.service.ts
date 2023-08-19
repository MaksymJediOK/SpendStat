import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { Category } from '@prisma/client'

@Injectable()
export class ExpenseByDateService {
    private currentDate = new Date()
    private currentYear = this.currentDate.getFullYear()
    constructor(private prisma: PrismaService) {}

    async getExpensesInCurrentMonthByCategory(userId: number) {
        const today = new Date()
        const currentYear = today.getFullYear()
        const currentMonth = today.getMonth()

        const startDate = new Date(currentYear, currentMonth, 1)
        const endDate = new Date(currentYear, currentMonth + 1, 0)

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
                            gte: startDate,
                            lte: endDate,
                        },
                    },
                },
            },
        })

        return expenses
    }

    async getExpensesTodayByCategory(userId: number) {
        const today = new Date()
        today.setHours(0, 0, 0, 0)

        const tomorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 1)
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
                            gte: today,
                            lt: tomorrow,
                        },
                    },
                },
            },
        })

        return expenses
    }

    async getExpensesInCurrentYear(userId: number) {
        const startDate = new Date(this.currentYear, 0, 1)
        const endDate = new Date(this.currentYear + 1, 0, 1)
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
                            gte: startDate,
                            lt: endDate,
                        },
                    },
                },
            },
        })

        return expenses
    }

    async getExpenseInCurrentWeek(userId: number) {
        const today = new Date()
        today.setHours(0, 0, 0, 0)

        const startOfWeek = new Date(today)
        startOfWeek.setDate(today.getDate() - today.getDay())

        const endOfWeek = new Date(today)
        endOfWeek.setDate(startOfWeek.getDate() + 6)

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
                            gte: startOfWeek,
                            lte: endOfWeek,
                        },
                    },
                },
            },
        })

        return expenses
    }

    async getAllTimeExpenseByCategory(userId: number) {
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

        return userCategories
    }
}
