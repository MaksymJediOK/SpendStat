import { useForm } from 'react-hook-form'
import { Input } from 'components/Input'
import { SubmitButton } from 'UI/Buttons/SubmitButton'
import { yupResolver } from '@hookform/resolvers/yup'
import { registrationSchema } from './schemas/registrationSchema.ts'
import { ErrorMsg } from 'UI/ErrorMsg'
import { RegistrationData } from 'features/Registration/types'
import { useRegistrationMutation } from 'features/Registration/api'

export const Registration = () => {
	const [register] = useRegistrationMutation()

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<RegistrationData>({
		mode: 'onBlur',
		resolver: yupResolver(registrationSchema),
		defaultValues: { email: '', username: '', password: '' },
	})

	const onSubmit = async (formData: RegistrationData) => {
		try {
			const result = await register(formData).unwrap()
			localStorage.setItem('token', result.access_token)
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<div>
			<div className='flex h-screen items-center justify-center'>
				<form className='rounded bg-white px-8 py-6 shadow-md' onSubmit={handleSubmit(onSubmit)}>
					<Input name='email' type='email' label='Email adress' control={control} />
					{errors.email && <ErrorMsg text={errors?.email?.message} />}
					<Input name='username' type='text' label='Enter your name' control={control} />
					{errors.username && <ErrorMsg text={errors?.username?.message} />}
					<Input name='password' type='password' label='Create a password' control={control} />
					{errors.password && <ErrorMsg text={errors?.password?.message} />}
					<div className='mt-4 flex justify-center'>
						<SubmitButton buttonText='Register' />
					</div>
				</form>
			</div>
		</div>
	)
}
//Maybe move errors to input component
