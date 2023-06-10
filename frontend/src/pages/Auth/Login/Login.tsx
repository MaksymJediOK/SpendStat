import { useForm } from 'react-hook-form'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = object().shape({
	name: string().required('Name is required'),
	email: string().required('email is required').email('Invalid email'),
})

type FormData = {
	name: string
	email: string
}

export const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		defaultValues: { name: '', email: '' },
		resolver: yupResolver(schema),
		mode: 'onBlur',
	})

	const handleOnSubmit = (data: FormData) => {
		console.log(data)
	}

	return (
		<>
			<form onSubmit={handleSubmit(handleOnSubmit)}>
				<div>
					<label>Name:</label>
					<input type='text' {...register('name')} />
					{errors.name && <span>{errors.name.message}</span>}
				</div>
				<div>
					<label>email:</label>
					<input type='text' {...register('email')} />
					{errors.email && <span>{errors.email.message}</span>}
				</div>
				<button type='submit'>Login</button>
			</form>
		</>
	)
}
