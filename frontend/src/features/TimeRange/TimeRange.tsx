import { Modal } from 'components/Modal'
import { useAppDispatch, useAppSelector } from 'hooks/redux.ts'
import { toggleTimeRangeModal } from 'store/reducers'
import { TimeRangeForm } from './ui'

const TimeRange = () => {
	const isOpen = useAppSelector((state) => state.manyModals.timeRangeModal.isOpen)
	const dispatch = useAppDispatch()

	return (
		<Modal active={isOpen} setActive={() => dispatch(toggleTimeRangeModal({ isOpen: false }))}>
			<TimeRangeForm />
		</Modal>
	)
}

export { TimeRange }
