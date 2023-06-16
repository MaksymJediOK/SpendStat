import { useForm } from 'react-hook-form'
import { Input } from 'components/Input'
import { RegistrationFormData } from 'types/Auth.ts'

export const Registration = () => {
	const {
		handleSubmit,
		control,
		formState: {},
	} = useForm<RegistrationFormData>({
		mode: 'onBlur',
		defaultValues: { nickname: '', password: '', gender: 'other' },
	})

	const submitHandler = (data: RegistrationFormData) => {
		console.log(data)
	}

	return (
		<div>
			<div className='flex items-center justify-center h-screen'>
				<form
					className='bg-white shadow-md rounded px-8 py-6'
					onSubmit={handleSubmit(submitHandler)}
				>
					<Input name='email' id='email' type='email' label='Email' control={control} />
					<button type='submit'>Submit</button>
				</form>
			</div>
		</div>
	)
}
