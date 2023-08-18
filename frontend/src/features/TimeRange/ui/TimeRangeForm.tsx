import { MdDateRange } from 'react-icons/md'
import { BsInfinity } from 'react-icons/bs'
import { RangeItem } from './components'
import { RangeOptions } from '../data/RangeOptions.ts'

const TimeRangeForm = () => {
	return (
		<div className='grid grid-cols-2 grid-rows-4'>
			<div className='col-span-2 flex flex-col items-center pb-3 pt-5'>
				<MdDateRange size={32} color='#6b7280' />
				<h2 className='tracking-wide text-black'>Choose Range</h2>
				<span className='text-gray-500'>Thu, 17 August</span>
			</div>
			<div>
				<div
					className='flex cursor-pointer flex-col items-center justify-center
			    px-5 py-2 hover:bg-blue-400 md:px-10 md:py-3'
					data-range='all'
				>
					<BsInfinity size={32} color='#6b7280' />
					<h2 className='mt-2 text-base font-semibold'>All time</h2>
				</div>
				{RangeOptions.map(({ days, value }) => (
					<RangeItem key={value} days={days.toString()} value={value} />
				))}
			</div>
		</div>
	)
}

export { TimeRangeForm }
