import { Body, Controller, Get, Post } from '@nestjs/common'
import { GetCurrentUserId } from '../common/decorators'
import { CreateExpenseDto } from './dto/create-expense.dto'
import { ExpenseService } from './expense.service'

@Controller('expense')
export class ExpenseController {
    constructor(private expenseService: ExpenseService) {}
    @Post('')
    createExpense(@GetCurrentUserId() userId: number, @Body() dto: CreateExpenseDto) {
        return this.expenseService.createExpense(userId, dto)
    }

    @Get('date')
    getAllTimeExpenses(@GetCurrentUserId() userId: number) {
        return this.expenseService.getSummarizedExpenses('today', userId)
    }
}
