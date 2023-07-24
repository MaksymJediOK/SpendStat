import { categoryApi } from 'services/category.api.ts'
import { ExpenseCategory } from 'features/ExpensesScreen/types'

const extendedCategoryApi = categoryApi.injectEndpoints({
	endpoints: (build) => ({
		getAllExpenses: build.query<ExpenseCategory[], string>({
			query: (filter: string = 'today') => ({
				url: 'expense',
				params: {
					filter,
				},
			}),
		}),
	}),
	overrideExisting: false,
})

export const { useGetAllExpensesQuery } = extendedCategoryApi
