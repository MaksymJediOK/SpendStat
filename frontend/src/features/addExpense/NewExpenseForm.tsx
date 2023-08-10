import { useAppSelector } from 'hooks/redux.ts'

// interface NewExpenseProps {
// 	color: string
// 	icon: string
// }

const NewExpenseForm = () => {
	const currentCategoryId = useAppSelector((state) => state.manyModals.expenseModal.id)
	return <div>content {currentCategoryId} </div>
}

export { NewExpenseForm }
