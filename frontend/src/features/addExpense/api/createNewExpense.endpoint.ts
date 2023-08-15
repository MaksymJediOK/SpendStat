import { categoryApi } from 'services/category.api.ts'
import { Expense } from 'types'
import { CreateExpense } from '../types/CreateExpense.ts'

const extendedCategoryApi = categoryApi.injectEndpoints({
	endpoints: (build) => ({
		createNewExpense: build.mutation<Expense, CreateExpense>({
			query: (body: CreateExpense) => ({
				url: 'expense',
				method: 'POST',
				body: body,
			}),
			invalidatesTags: [{ type: 'Category', id: 'LIST' }],
		}),
	}),
	overrideExisting: false,
})

export const { useCreateNewExpenseMutation } = extendedCategoryApi
