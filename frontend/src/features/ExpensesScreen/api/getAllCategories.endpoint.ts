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
			providesTags: (result) =>
				result
					? [
							...result.map(({ }, index) => ({ type: 'Category' as const, index })),
							{ type: 'Category', id: 'LIST' },
					  ]
					: [{ type: 'Category', id: 'LIST' }],
		}),
	}),
	overrideExisting: false,
})

export const { useGetAllExpensesQuery } = extendedCategoryApi

//Todo add id field from query
