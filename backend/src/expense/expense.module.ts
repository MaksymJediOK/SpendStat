import { Module } from '@nestjs/common'
import { ExpenseController } from './expense.controller'
import { ExpenseService } from './expense.service'
import { ExpenseByDateService } from './sub-services/expenseByDate.service'
import { ExpenseRepository } from './sub-services/expense.repository'

@Module({
    controllers: [ExpenseController],
    providers: [ExpenseService, ExpenseByDateService, ExpenseRepository],
    exports: [ExpenseService],
})
export class ExpenseModule {}
