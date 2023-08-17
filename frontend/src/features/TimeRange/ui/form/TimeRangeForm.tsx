import { MdDateRange } from 'react-icons/md'
import { RangeItem } from './components'

const TimeRangeForm = () => {
	return (
		<div className='grid grid-cols-2 grid-rows-4'>
			<div className='col-span-2 flex flex-col items-center pt-5 pb-3'>
				<MdDateRange size={32} color='#6b7280' />
				<h2 className='tracking-wide text-black'>Choose Range</h2>
				<span className='text-gray-500'>Thu, 17 August</span>
			</div>
			<RangeItem days={1} value='Today' />
			<RangeItem days={30} value='Month' />
		</div>
	)
}

export { TimeRangeForm }
