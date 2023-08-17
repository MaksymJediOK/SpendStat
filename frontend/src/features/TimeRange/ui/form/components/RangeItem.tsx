interface RangeItemProps {
	days: number
	value: string
}

const RangeItem = ({ days, value }: RangeItemProps) => {
	return (
		<div className='flex flex-col items-center justify-center px-5 py-2 hover:bg-blue-500 md:px-10 md:py-3'>
			<div className='mx-2 min-w-[35px] rounded-md bg-black p-1 text-center'>
				<span className='px-1 text-[16px] font-bold text-white'>{days}</span>
			</div>
			<h2 className='mt-2 text-base font-semibold'>{value}</h2>
		</div>
	)
}

export { RangeItem }
