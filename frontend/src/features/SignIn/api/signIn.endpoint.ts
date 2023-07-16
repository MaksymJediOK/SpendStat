import { authApi } from 'services/auth.api.ts'
import { SignInData } from 'features/SignIn/types'

interface Tokens {
	access_token: string
	refresh_token: string
}

const extendedAuthApi = authApi.injectEndpoints({
	endpoints: (build) => ({
		signIn: build.mutation<Tokens, SignInData>({
			query: (body: SignInData) => ({
				url: 'auth/local/signin',
				method: 'POST',
				body: body,
			}),
		}),
	}),
	overrideExisting: false,
})

export const { useSignInMutation } = extendedAuthApi
