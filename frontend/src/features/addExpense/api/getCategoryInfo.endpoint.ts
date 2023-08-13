import { categoryApi } from 'services/category.api.ts'
import { NewCategory } from 'features/CreateCategory/types/NewCategory.ts'

const extendedCategoryApi = categoryApi.injectEndpoints({
	endpoints: (build) => ({
		getSingleCategory: build.query<NewCategory, string>({
			query: (categoryId: string) => ({
				url: `categories/${categoryId}`,
			}),
		}),
	}),
	overrideExisting: false,
})

export const { useGetSingleCategoryQuery } = extendedCategoryApi
