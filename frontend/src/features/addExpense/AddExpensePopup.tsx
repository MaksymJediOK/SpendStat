import { Modal } from 'components/Modal'
import { useAppDispatch, useAppSelector } from 'hooks/redux.ts'
import { toggleExpenseModal } from 'store/reducers'
import { NewExpenseForm } from 'features/addExpense/NewExpenseForm.tsx'

export const AddExpensePopup = () => {
	const isOpen = useAppSelector((state) => state.manyModals.expenseModal.isOpen)
	const currentCategoryId = useAppSelector((state) => state.manyModals.expenseModal.id)
	const dispatch = useAppDispatch()
	if (!currentCategoryId) return <div></div>

	return (
		<>
			<Modal active={isOpen} setActive={() => dispatch(toggleExpenseModal({ isOpen: false }))}>
				<NewExpenseForm categoryId={currentCategoryId} />
			</Modal>
		</>
	)
}
