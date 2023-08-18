interface RangeItemProps {
	days: string
	value: string
}

const RangeItem = ({ days, value }: RangeItemProps) => {
	const capitalizedWord = value.charAt(0).toUpperCase() + value.slice(1)

	return (
		<div
			className='
			flex cursor-pointer flex-col items-center justify-center
			px-5 py-2 hover:bg-blue-300 md:px-10 md:py-3'
			data-range={value}
		>
			<div className='mx-2 min-w-[35px] rounded-md bg-gray-500 p-1 text-center'>
				<span className='px-1 text-[16px] font-bold text-white hover:text-blue-400'>{days}</span>
			</div>
			<h2 className='mt-2 text-base font-semibold '>{capitalizedWord}</h2>
		</div>
	)
}

export { RangeItem }
