import React from 'react'
import { MdDateRange } from 'react-icons/md'
import { RangeItem, RangeItemAll } from './components'
import { useAppDispatch, useAppSelector } from 'hooks/redux.ts'
import { toggleTimeRangeModal } from 'store/reducers'
import { RangeOptions } from '../data/RangeOptions.ts'

const TimeRangeForm = () => {
	const dispatch = useAppDispatch()
	const timeFilter = useAppSelector((state) => state.manyModals.timeRangeModal.filter) || 'all'

	const handleSelection = (event: React.MouseEvent<HTMLDivElement>) => {
		const targetElement = event.target as HTMLDivElement
		const rangeItem = targetElement.closest('.range')
		if (rangeItem) {
			const dataAttribute = rangeItem.getAttribute('data-range')
			if (dataAttribute) {
				dispatch(toggleTimeRangeModal({ isOpen: false, filter: dataAttribute }))
			}
		}
	}

	return (
		<div className='grid grid-cols-2 grid-rows-4' onClick={handleSelection}>
			<div className='col-span-2 flex flex-col items-center pb-3 pt-5'>
				<MdDateRange size={32} color='#6b7280' />
				<h2 className='tracking-wide text-black'>Choose Range</h2>
				<span className='text-gray-500'>Thu, 17 August</span>
			</div>
			<RangeItemAll currentFilter={timeFilter} dataRange='all' />
			{RangeOptions.map(({ days, value }) => (
				<RangeItem key={value} days={days.toString()} value={value} currentFilter={timeFilter} />
			))}
		</div>
	)
}

export { TimeRangeForm }
