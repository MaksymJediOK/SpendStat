import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithToken } from './baseQueryWithToken.ts'

export const categoryApi = createApi({
	reducerPath: 'category/api',
	baseQuery: baseQueryWithToken,
	endpoints: () => ({}),
})
