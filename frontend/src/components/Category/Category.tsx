import { RoundIcon } from 'UI/RoundIcon'
import { HiShoppingCart } from 'react-icons/hi'

interface CategoryProps {
	title: string
	expenses: number
}

export const Category = ({ title, expenses }: CategoryProps) => {
	let currency = localStorage.getItem('currency')
	if (currency) currency = JSON.parse(currency)
	return (
		<div className='category flex flex-col items-center gap-0.5 md:gap-2 lg:gap-2'>
			<h2 className='text-sm font-semibold text-black lg:text-base'>{title}</h2>
			<RoundIcon
				color={'bg-[#f1c40f]'}
				icon={<HiShoppingCart data-circle='hello' size={24} color='white' />}
			/>
			<span className='text-sm text-gray-400 lg:text-base'>
				{expenses} {currency}
			</span>
		</div>
	)
}
