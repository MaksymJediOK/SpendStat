import { RoundedButton } from 'UI/Buttons/RoundedButton'
import { Link } from 'react-router-dom'

export const ExpiredSessionPage = () => {
	return (
		<div className='flex h-screen w-screen flex-col  items-center justify-center  bg-gray-200'>
			<h2 className='text-2xl font-semibold text-black'>Your session expired</h2>
			<div className='flex flex-wrap gap-4 md:flex-nowrap md:gap-5'>
				<Link to='/login' relative='path'>
					<RoundedButton color='black' type='button'>
						Login
					</RoundedButton>
				</Link>

				<Link to='/registration' relative='path'>
					<RoundedButton color='black' type='button'>
						Sign Up
					</RoundedButton>
				</Link>
			</div>
		</div>
	)
}
