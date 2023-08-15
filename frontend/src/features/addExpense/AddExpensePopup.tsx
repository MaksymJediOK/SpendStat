import { Modal } from 'components/Modal'
import { useAppDispatch, useAppSelector } from 'hooks/redux.ts'
import { toggleExpenseModal } from 'store/reducers'
import { NewExpenseHeader, NewExpenseForm } from './ui'

export const AddExpensePopup = () => {
	const { isOpen, id } = useAppSelector((state) => state.manyModals.expenseModal)
	const dispatch = useAppDispatch()
	if (!id) return <div></div>

	return (
		<>
			<Modal active={isOpen} setActive={() => dispatch(toggleExpenseModal({ isOpen: false }))}>
				<NewExpenseHeader categoryId={id} />
				<NewExpenseForm categoryId={id} />
			</Modal>
		</>
	)
}
