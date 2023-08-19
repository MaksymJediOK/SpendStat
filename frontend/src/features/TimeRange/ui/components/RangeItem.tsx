interface RangeItemProps {
	days: string
	value: string
	currentFilter: string
}

const RangeItem = ({ days, value, currentFilter }: RangeItemProps) => {
	const capitalizedWord = value.charAt(0).toUpperCase() + value.slice(1)
	const isSelected = value === currentFilter
	return (
		<div
			className={`
				range flex cursor-pointer flex-col items-center
				justify-center px-5 py-2 md:px-10 md:py-3 ${isSelected ? 'bg-blue-500' : 'bg-white'}`}
			data-range={value}
		>
			<div
				className={`mx-2 min-w-[35px] rounded-md ${
					isSelected ? 'bg-white' : 'bg-gray-500'
				}  p-1 text-center`}
			>
				<span className={`px-1 text-[16px] font-bold ${isSelected ? 'text-blue-500' : 'text-white'}`}>
					{days}
				</span>
			</div>
			<h2 className={`mt-2 text-base font-semibold ${isSelected ? 'text-white' : 'text-gray-600'}`}>
				{capitalizedWord}
			</h2>
		</div>
	)
}

export { RangeItem }
