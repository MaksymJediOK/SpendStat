import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateCategoryDto } from './dto/create-category.dto'

@Injectable()
export class CategoriesService {
    constructor(private prisma: PrismaService) {}

    async createCategory(userId: number, dto: CreateCategoryDto) {
        return this.prisma.category.create({
            data: {
                title: dto.title,
                color: dto?.color || 'blue',
                icon: dto?.icon || 'cart',
                User: {
                    connect: {
                        id: userId,
                    },
                },
            },
        })
    }

    async updateCategory(categoryId: number, dto: CreateCategoryDto) {
        return this.prisma.category.update({
            where: {
                id: categoryId,
            },
            data: {
                title: dto.title,
            },
        })
    }

    async deleteCategory(categoryId: number) {
        return this.prisma.category.delete({
            where: {
                id: categoryId,
            },
        })
    }

    private async addExpenseValueToCategory(categoryId: number, expenseValue: number) {
        await this.prisma.category.update({
            where: {
                id: categoryId,
            },
            data: {},
        })
    }
}
