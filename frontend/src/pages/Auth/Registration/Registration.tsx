import { Input } from 'UI/Input'

export const Registration = () => {
	return (
		<div>
			<div className='flex items-center justify-center h-screen'>
				<form className='bg-white shadow-md rounded px-8 py-6'>
					<Input id={'Email'} name={'Email'} type={'email'} label={'Email'} />
					<Input id={'password'} name={'password'} type={'email'} label={'password'} />
				</form>
			</div>
		</div>
	)
}
