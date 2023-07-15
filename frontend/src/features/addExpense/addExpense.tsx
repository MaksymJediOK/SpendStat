import { Modal } from 'components/Modal'
import { useAppDispatch, useAppSelector } from 'hooks/redux.ts'
import { toggleExpenseModal } from '../../store/reducers'

// import { useForm } from 'react-hook-form'
// import { Expense } from 'types/Expense.ts'

export const AddExpense = () => {
	const isOpen = useAppSelector((state) => state.manyModals.expenseModal)
	const dispatch = useAppDispatch()

	// const {
	// 	control,
	// 	handleSubmit,
	// 	formState: { errors },
	// } = useForm<Expense>({
	// 	mode: 'onBlur',
	// })

	return (
		<>
			<Modal active={isOpen} setActive={() => dispatch(toggleExpenseModal(false))}>
				<div className='py-2 md:py-3'></div>
			</Modal>
		</>
	)
}
