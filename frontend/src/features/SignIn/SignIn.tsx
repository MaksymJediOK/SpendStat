import { Input } from 'components/Input'
import { ErrorMsg } from 'UI/ErrorMsg'
import { SubmitButton } from 'UI/SubmitButton'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { signInSchema } from './schemas/signInSchema.ts'

interface SignInData {
	email: string
	password: string
}

export const SignIn = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInData>({
		mode: 'onBlur',
		defaultValues: { email: '', password: '' },
		resolver: yupResolver(signInSchema),
	})

	const onSubmit = (data: SignInData) => {
		console.log(data)
	}

	return (
		<div>
			<div className='flex items-center justify-center h-screen'>
				<form className='bg-white shadow-md rounded px-8 py-6' onSubmit={handleSubmit(onSubmit)}>
					<Input name='email' type='email' label='Email ' control={control} />
					{errors.email && <ErrorMsg text={errors?.email?.message} />}
					<Input name='password' type='text' label='Enter password' control={control} />
					{errors.password && <ErrorMsg text={errors?.password?.message} />}
					<div className='flex justify-center mt-4'>
						<SubmitButton buttonText='Sign in' />
					</div>
				</form>
			</div>
		</div>
	)
}
