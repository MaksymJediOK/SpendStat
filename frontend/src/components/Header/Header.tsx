import { drawerToggle, toggleTimeRangeModal } from 'store/reducers'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useAppDispatch } from 'hooks/redux.ts'
import { ChosenRange, Total } from './ui'

export const Header = () => {
	const dispatch = useAppDispatch()

	return (
		<section className='mx-auto bg-blue-400 px-3 py-2 md:px-6 md:py-3'>
			<div className='grid grid-cols-3 grid-rows-1 items-center  gap-1 text-center'>
				<div className='col-start-1 cursor-pointer' onClick={() => dispatch(drawerToggle(true))}>
					<RxHamburgerMenu size={24} color='#fff' />
				</div>
				<div className='col-span-1 col-start-2'>
					<h4 className='text-base font-semibold'>All accounts</h4>
					<Total />
					<div
						className='flex cursor-pointer flex-col items-center justify-center text-center md:flex-row'
						onClick={() => dispatch(toggleTimeRangeModal({ isOpen: true }))}
					>
						<ChosenRange />
					</div>
				</div>
				<Link to='/registration' className='col-start-3 flex justify-end no-underline'>
					<AiOutlineUser size={24} color='#fff' />
				</Link>
			</div>
		</section>
	)
}
