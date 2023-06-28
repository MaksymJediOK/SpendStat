import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { ExpenseService } from '../expense/expense.service';

@Module({
  imports: [ExpenseService],
  controllers: [CategoriesController],
  providers: [CategoriesService]
})
export class CategoriesModule {}
