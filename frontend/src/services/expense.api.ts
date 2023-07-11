import { createApi } from '@reduxjs/toolkit/query'
import { baseQueryWithToken } from './baseQueryWithToken.ts'

export const expenseApi = createApi({
	baseQuery: baseQueryWithToken,
	endpoints: () => ({}),
})
