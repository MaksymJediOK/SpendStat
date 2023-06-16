import { useForm } from 'react-hook-form'
import { Input } from 'components/Input'
import { SubmitButton } from 'UI/SubmitButton'
import { yupResolver } from '@hookform/resolvers/yup'
import { registrationSchema } from './schemas/registrationSchema.ts'

interface RegistrationData {
	email: string
	password: string
	gender: 'male' | 'female' | 'other'
}

export const Registration = () => {
	const { control, handleSubmit } = useForm<RegistrationData>({
		mode: 'onBlur',
		resolver: yupResolver(registrationSchema),
		defaultValues: { email: '', password: '', gender: 'other' },
	})
	const onSubmit = (data: RegistrationData) => {
		console.log(data)
	}
	return (
		<div>
			<div className='flex items-center justify-center h-screen'>
				<form className='bg-white shadow-md rounded px-8 py-6' onSubmit={handleSubmit(onSubmit)}>
					<Input name='email' type='email' label='Email adress' control={control} />
					<Input name='password' type='text' label='Create a password' control={control} />
					<Input name='gender' type='text' label='Gender' control={control} />
					<div className='flex justify-center mt-4'>
						<SubmitButton buttonText='Register' />
					</div>
				</form>
			</div>
		</div>
	)
}
//Todo render errors