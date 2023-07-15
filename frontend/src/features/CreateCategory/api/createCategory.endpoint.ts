import { categoryApi } from 'services/category.api.ts'
import { NewCategory } from 'features/CreateCategory/types/NewCategory.ts'

const extendedCategoryApi = categoryApi.injectEndpoints({
	endpoints: (build) => ({
		createNewCategory: build.mutation<NewCategory & { userId: number }, NewCategory>({
			query: (body: NewCategory) => ({
				url: 'categories',
				method: 'POST',
				body: body,
			}),
		}),
	}),
	overrideExisting: false,
})

export const { useCreateNewCategoryMutation } = extendedCategoryApi
