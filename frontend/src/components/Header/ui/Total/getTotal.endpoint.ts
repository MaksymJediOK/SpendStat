import { categoryApi } from 'services/category.api.ts'

const extendedCategoryApi = categoryApi.injectEndpoints({
	endpoints: (build) => ({
		getTotal: build.query<number, void>({
			query: () => 'expense/total',
		}),
	}),
	overrideExisting: false,
})

export const { useGetTotalQuery } = extendedCategoryApi
//Make revalidation after changes to expenses