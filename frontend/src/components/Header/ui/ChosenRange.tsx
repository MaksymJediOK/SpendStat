import { useAppSelector } from 'hooks/redux.ts'
import { dateInfo } from 'utils/dateInfo.ts'

const ChosenRange = () => {
	const filter = useAppSelector((state) => state.manyModals.timeRangeModal.filter) || 'all'
	const { num, date } = dateInfo(filter)

	return (
		<>
			<div className='mx-2 rounded-md bg-black p-1'>
				<span className='px-1 text-[16px] font-bold text-white'>{num}</span>
			</div>
			<h3 className='md:text:xl text-base font-semibold uppercase'>{date}</h3>
		</>
	)
}

export { ChosenRange }
