import { RoundIcon } from 'UI/RoundIcon'
import { HiShoppingCart } from 'react-icons/hi'

interface CategoryProps {
	title: string
	expenses: number
}

export const Category = ({ title, expenses }: CategoryProps) => {
	return (
		<div className='flex flex-col gap-0.5 md:gap-2 lg:gap-2 w-12 h-12 items-center' >
			<h2 className='font-semibold text-black text-sm lg:text-base'>{title}</h2>
			<RoundIcon color={'bg-blue-500'} icon={<HiShoppingCart data-circle='hello' size={24} color='white'  />} />
			<span className='text-gray-400 text-sm lg:text-base'>{expenses} $</span>
		</div>
	)
}
