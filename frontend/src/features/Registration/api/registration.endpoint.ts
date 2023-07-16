import { authApi } from 'services/auth.api.ts'
import { RegistrationData } from 'features/Registration/types'

interface Tokens {
	access_token: string
	refresh_token: string
}

const extendedAuthApi = authApi.injectEndpoints({
	endpoints: (build) => ({
		registration: build.mutation<Tokens, RegistrationData>({
			query: (body: RegistrationData) => ({
				url: 'auth/local/signup',
				method: 'POST',
				body: body,
			}),
		}),
	}),
	overrideExisting: false,
})

export const { useRegistrationMutation } = extendedAuthApi
