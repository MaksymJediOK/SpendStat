import { BsInfinity } from 'react-icons/bs'

interface RangeItemAllProps {
	currentFilter: string
	dataRange: string
}
const RangeItemAll = ({ currentFilter, dataRange }: RangeItemAllProps) => {
	const isSelected = dataRange === currentFilter
	return (
		<div
			className={`range flex cursor-pointer flex-col items-center 
					justify-center px-5 py-2 md:px-10 md:py-3 
					${isSelected ? 'bg-blue-500' : 'bg-white'}`}
			data-range='all'
		>
			<BsInfinity size={32} color={`${isSelected ? '#fff' : '#6b7280'} `} />
			<h2 className={`mt-2 text-base font-medium ${isSelected ? 'text-white' : 'text-gray-600'}`}>
				All time
			</h2>
		</div>
	)
}

export { RangeItemAll }
