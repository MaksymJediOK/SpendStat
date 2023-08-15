import { categoryApi } from 'services/category.api.ts'
import {Category} from 'types'

const extendedCategoryApi = categoryApi.injectEndpoints({
	endpoints: (build) => ({
		getSingleCategory: build.query<Category, string>({
			query: (categoryId: string) => ({
				url: `categories/${categoryId}`,
			}),
		}),
	}),
	overrideExisting: false,
})

export const { useGetSingleCategoryQuery } = extendedCategoryApi
