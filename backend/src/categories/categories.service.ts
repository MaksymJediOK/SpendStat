import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateCategoryDto } from './dto/create-category.dto'
import { CategoriesRepository } from './sub-services/categories.repository'

@Injectable()
export class CategoriesService {
    constructor(private prisma: PrismaService, private categoriesRepository: CategoriesRepository) {}

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

    async getCategoryInfo(categoryId: number) {
        return this.categoriesRepository.findCategoryById(categoryId)
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
