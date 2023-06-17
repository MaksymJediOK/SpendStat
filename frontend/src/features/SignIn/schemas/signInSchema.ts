import { object, string } from 'yup'

export const signInSchema = object().shape({
	email: string().required('Email is required'),
	password: string().required('You have to enter password'),
})
