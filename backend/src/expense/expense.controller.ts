import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common'
import { GetCurrentUserId } from '../common/decorators'
import { CreateExpenseDto } from './dto/create-expense.dto'
import { ExpenseService } from './expense.service'
import { UpdateExpenseDto } from './dto/update-expense.dto'

@Controller('expense')
export class ExpenseController {
    constructor(private expenseService: ExpenseService) {}
    @Post('')
    createExpense(@GetCurrentUserId() userId: number, @Body() dto: CreateExpenseDto) {
        return this.expenseService.createExpense(userId, dto)
    }

    @Put(':id')
    updateExpense(@Param(':id') expenseId: number, @Body() dto: UpdateExpenseDto) {
        return this.expenseService.updateExpense(expenseId, dto)
    }

    @Get('')
    getAllTimeExpenses(@Query('filter') filter: string = 'today', @GetCurrentUserId() userId: number) {
        return this.expenseService.getSummarizedExpenses(filter, userId)
    }

    @Get('total')
    getTotalExpenses(@GetCurrentUserId() userId: number) {
        return this.expenseService.totalExpenses(userId)
    }
}
