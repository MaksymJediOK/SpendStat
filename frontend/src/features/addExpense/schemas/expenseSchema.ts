import { number, object, string } from 'yup'
import { Expense } from 'types/Expense.ts'

export const expenseSchema = object<Expense>().shape({
	title: string().optional(),
	value: number().required().positive().min(1, 'Expense must be more than 0'),
})
