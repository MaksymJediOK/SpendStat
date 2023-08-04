import { Input } from 'components/Input'
import { ErrorMsg } from 'UI/ErrorMsg'
import { SubmitButton } from 'UI/Buttons/SubmitButton'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { signInSchema } from './schemas/signInSchema.ts'
import { SignInData } from 'features/SignIn/types/SignInData.ts'
import { useSignInMutation } from 'features/SignIn/api'
import { Link, useNavigate } from 'react-router-dom'
import { RoundedButton } from 'UI/Buttons/RoundedButton'

export const SignIn = () => {
	const [signIn] = useSignInMutation()
	const navigate = useNavigate()
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInData>({
		mode: 'onBlur',
		defaultValues: { email: '', password: '' },
		resolver: yupResolver(signInSchema),
	})

	const onSubmit = async (formData: SignInData) => {
		try {
			const { access_token } = await signIn(formData).unwrap()
			await new Promise<void>((resolve) => {
				localStorage.setItem('token', access_token)
				resolve()
			})
			navigate('/home', { relative: 'path' })
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<div>
			<div className='flex h-screen items-center justify-center'>
				<form className='rounded bg-white px-8 py-6 shadow-md' onSubmit={handleSubmit(onSubmit)}>
					<Input name='email' type='email' label='Email ' control={control} />
					{errors.email && <ErrorMsg text={errors?.email?.message} />}
					<Input name='password' type='text' label='Enter password' control={control} />
					{errors.password && <ErrorMsg text={errors?.password?.message} />}
					<div className='mt-4 flex justify-center'>
						<SubmitButton buttonText='Sign in' />
					</div>
					<Link to='/registration' className='mt-4 flex justify-center'>
						<RoundedButton color='black' type='button'>
							Don't have an account ?
						</RoundedButton>
					</Link>
				</form>
			</div>
		</div>
	)
}
