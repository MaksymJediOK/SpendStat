import { RoundIcon } from 'UI/RoundIcon'
import { colorMapping, iconMapping } from 'utils'

interface CategoryProps {
	id: number
	title: string
	expenses: number
	color: string
	icon: string
}

export const Category = ({ id, title, expenses, color = '#000', icon }: CategoryProps) => {
	let currency = localStorage.getItem('currency')
	if (currency) currency = JSON.parse(currency)
	const dynamicClass = colorMapping(color)
	const UserIcon = iconMapping(icon)
	return (
		<div className='category flex flex-col items-center gap-0.5 md:gap-2 lg:gap-2' data-categoryid={id}>
			<h2 className='text-sm font-semibold text-black lg:text-base'>{title}</h2>
			<RoundIcon color={dynamicClass} icon={<UserIcon size={24} color='white' />} />
			<span className='text-sm text-gray-400 lg:text-base'>
				{expenses} {currency}
			</span>
		</div>
	)
}
