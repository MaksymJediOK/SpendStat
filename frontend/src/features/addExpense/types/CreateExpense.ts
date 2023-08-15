import { Expense } from 'types/Expense.ts'

export interface CreateExpense extends Expense {
	categoryId: number
}