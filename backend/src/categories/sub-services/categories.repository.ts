import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'

@Injectable()
export class CategoriesRepository {
    constructor(private prisma: PrismaService) {}

    async findCategoryById(id: number) {
        return this.prisma.category.findUnique({
            where: {
                id,
            },
        })
    }
}
