import { RoundIcon } from 'UI/RoundIcon'
import { HiShoppingCart } from 'react-icons/hi'
import { colorMapping } from 'utils'

interface CategoryProps {
	title: string
	expenses: number
	color: string
}

export const Category = ({ title, expenses, color ='#000' }: CategoryProps) => {
	let currency = localStorage.getItem('currency')
	if (currency) currency = JSON.parse(currency)
	const dynamicClass = colorMapping(color)
	return (
		<div className='category flex flex-col items-center gap-0.5 md:gap-2 lg:gap-2'>
			<h2 className='text-sm font-semibold text-black lg:text-base'>{title}</h2>
			<RoundIcon
				color={dynamicClass}
				icon={<HiShoppingCart size={24} color='white' />}
			/>
			<span className='text-sm text-gray-400 lg:text-base'>
				{expenses} {currency}
			</span>
		</div>
	)
}
