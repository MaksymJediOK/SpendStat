import React from 'react'
import './Drawer.scss'
import { IoMdClose } from 'react-icons/io'
import { TbPigMoney } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { useAppDispatch } from 'hooks/redux.ts'
import { toggleCurrencyModal } from 'features/ChangeCurrency/reducer'
import { HiOutlineHome, HiOutlineCalendar, HiOutlineCurrencyDollar } from 'react-icons/hi'

interface DrawerProps {
	active: boolean
	setActive: (state: boolean) => void
}

export const DrawerContent = ({ active, setActive }: DrawerProps) => {
	const dispatch = useAppDispatch()

	return (
		<div className={active ? `drawer open` : 'drawer'} onClick={() => setActive(false)}>
			<div
				className={active ? 'drawer_content open' : 'drawer_content'}
				onClick={(event: React.MouseEvent<HTMLDivElement>) => event.stopPropagation()}
			>
				<div className='flex items-center justify-between'>
					<div className='p-2'>
						<TbPigMoney size={28} />
					</div>
					<div
						className='cursor-pointer rounded-md p-2.5 hover:bg-neutral-300'
						onClick={() => setActive(false)}
					>
						<IoMdClose size={16} />
					</div>
				</div>
				<ul className='mt-4 list-none'>
					<li
						className='my-1 flex cursor-pointer items-center gap-2 rounded-md
					p-1 hover:bg-neutral-300 md:my-2 md:gap-5 md:px-2 md:py-1.5'
					>
						<HiOutlineHome size={24} />
						<Link to='/home' className='font-medium text-black no-underline'>
							Home
						</Link>
					</li>
					<li
						className='my-1 flex cursor-pointer items-center gap-2 rounded-md
					p-1 hover:bg-neutral-300 md:my-2 md:gap-5 md:px-2 md:py-1.5'
					>
						<HiOutlineCurrencyDollar size={24} />
						<span
							className='font-medium text-black no-underline'
							onClick={() => dispatch(toggleCurrencyModal(true))}
						>
							Currency format
						</span>
					</li>
					<li
						className='my-1 flex cursor-pointer items-center gap-2 rounded-md
					p-1 hover:bg-neutral-300 md:my-2 md:gap-5 md:px-2 md:py-1.5'
					>
						<HiOutlineCalendar size={24} />
						<Link to='/home' className='font-medium text-black no-underline'>
							Date format
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}
