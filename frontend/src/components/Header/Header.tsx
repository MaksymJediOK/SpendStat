import { useDispatch } from 'react-redux'
import { drawerToggle } from 'store/reducers'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export const Header = () => {
	const dispatch = useDispatch()

	return (
		<section className=' mx-auto bg-blue-400 px-3 py-2 md:px-6 md:py-3'>
			<div className='grid grid-cols-3 grid-rows-1 items-center  gap-1 text-center'>
				<div className='col-start-1 cursor-pointer' onClick={() => dispatch(drawerToggle(true))}>
					<RxHamburgerMenu size={24} color='#fff' />
				</div>
				<div className='col-span-1 col-start-2'>
					<h4 className='text-base font-semibold'>All accounts</h4>
					<h2 className='text-xl font-semibold tracking-wide'>-17 778$</h2>
					<div className='flex flex-col items-center justify-center text-center md:flex-row'>
						<div className='mx-2 rounded-md bg-black p-1'>
							<span className='px-1 text-[16px] font-bold text-white'>30</span>
						</div>
						<h3 className='text-xl font-semibold uppercase'>червень 2023</h3>
					</div>
				</div>
				<Link to='/registration' className='col-start-3 flex justify-end no-underline'>
					<AiOutlineUser size={24} color='#fff' />
				</Link>
			</div>
		</section>
	)
}
