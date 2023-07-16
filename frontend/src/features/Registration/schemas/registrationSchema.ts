import { object, string } from 'yup'

export const registrationSchema = object().shape({
	email: string().required('email is required').email('invalid email'),
	password: string().min(5, 'At least 5 characters').required('you must create password'),
})
