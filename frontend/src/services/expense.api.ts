import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithToken } from './baseQueryWithToken.ts'

export const expenseApi = createApi({
	reducerPath: 'expense/api',
	baseQuery: baseQueryWithToken,
	endpoints: () => ({}),
})
