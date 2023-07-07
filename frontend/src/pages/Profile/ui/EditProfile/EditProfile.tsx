import { useForm } from 'react-hook-form'
import { Input } from 'components/Input'
import { ErrorMsg } from 'UI/ErrorMsg'
import { RoundedButton } from 'UI/RoundedButton'

interface EditData {
	name: string
	email: string
}

export const EditProfile = () => {
	const {
		control,
		handleSubmit,
		formState: { errors, isDirty },
	} = useForm<EditData>({
		mode: 'onBlur',
		defaultValues: { name: '', email: '' },
	})

	const onSubmit = (data: EditData) => {
		console.log(data)
	}

	return (
		<>
			<h2 className='font-semibold border-b-2 border-b-gray-300'>Public Profile</h2>
			<div className='mt-4'>
				<div className='relative'>
					<h3 className='mb-2 text-sm'>Profile picture</h3>
					<img
						src='https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png'
						className='w-32 h-32 rounded-full'
						alt='Profile Picture'
					/>
					<button className='absolute bottom-0 left-0 bg-gray-500 text-white px-2 py-1 rounded text-sm'>
						Edit
					</button>
				</div>
			</div>
			<div className='my-3'>
				<h2 className='font-semibold my-1'>Name</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Input name='name' type='text' label='' control={control} />
					{errors.name && <ErrorMsg text={errors?.name?.message} />}
					<h2 className='font-semibold my-3 md:my-5'>Email</h2>
					<Input name='email' type='email' label='' control={control} />
					{errors.email && <ErrorMsg text={errors?.email?.message} />}
					<span className='text-sm text-gray-400 '>
						You have set your email address to private. To toggle email privacy, go to email settings and
						uncheck "Keep my email address private.
					</span>
					<RoundedButton color='#238636' type='submit' isDisabled={!isDirty}>
						Update
					</RoundedButton>
				</form>
			</div>
		</>
	)
}
