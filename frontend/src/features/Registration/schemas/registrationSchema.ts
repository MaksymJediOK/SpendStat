import { object, string } from 'yup'

export const registrationSchema = object().shape({
	email: string().required('Name is required').email('invalid email'),
	password: string().min(5, 'At least 5 characters').required('you must create password'),
	gender: string().required('choose a gender'),
})
