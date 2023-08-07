import { object, string } from 'yup'

export const categoryResolver = object().shape({
	title: string().required('You have to write a title'),
	color: string(),
	icon: string(),
})
