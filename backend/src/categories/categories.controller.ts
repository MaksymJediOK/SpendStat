import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common'
import { GetCurrentUserId } from '../common/decorators'
import { CreateCategoryDto } from './dto/create-category.dto'
import { CategoriesService } from './categories.service'

@Controller('categories')
export class CategoriesController {
    constructor(private categoriesService: CategoriesService) {}
    @Post('')
    createNewCategory(@GetCurrentUserId() userId: number, @Body() dto: CreateCategoryDto) {
        return this.categoriesService.createCategory(userId, dto)
    }
    //Rewrite using body, params seems meh
    @Put(':id')
    updateCategory(@Param('id') categoryId: number, @Body() dto: CreateCategoryDto) {
        return this.categoriesService.updateCategory(categoryId, dto)
    }
    @Delete(':id')
    deleteCategory(@Param('id') categoryId: number) {
        return this.categoriesService.deleteCategory(categoryId)
    }
}
