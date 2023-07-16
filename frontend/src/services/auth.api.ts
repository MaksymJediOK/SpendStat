import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithToken } from 'services/baseQueryWithToken.ts'

export const authApi = createApi({
	reducerPath: 'auth/api',
	baseQuery: baseQueryWithToken,
	endpoints: () => ({}),
})