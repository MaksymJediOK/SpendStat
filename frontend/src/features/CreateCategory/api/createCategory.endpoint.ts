import { categoryApi } from 'services/category.api.ts'
import { Category } from 'types'

const extendedCategoryApi = categoryApi.injectEndpoints({
	endpoints: (build) => ({
		createNewCategory: build.mutation<Category & { categoryId: number }, Category>({
			query: (body: Category) => ({
				url: 'categories',
				method: 'POST',
				body: body,
			}),
			invalidatesTags: [{ type: 'Category', id: 'LIST' }],
		}),
	}),
	overrideExisting: false,
})

export const { useCreateNewCategoryMutation } = extendedCategoryApi
