import React from 'react'
import { Category } from 'components/Category'
import { AddButton } from 'UI/Buttons/AddButton'
import { useAppDispatch } from 'hooks/redux.ts'
import { ExpenseCategory } from 'features/ExpensesScreen/types'
import { toggleCategoryModal, toggleExpenseModal } from 'store/reducers'

export const CategoryList = ({ expenses }: { expenses: ExpenseCategory[] }) => {
	const dispatch = useAppDispatch()

	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		const targetElement = event.target as HTMLElement
		const categoryElement = targetElement.closest('.category')
		if (categoryElement) {
			const categoryId = categoryElement.getAttribute('data-categoryid')
			dispatch(toggleExpenseModal({ isOpen: true, id: categoryId }))
		}
	}

	return (
		<div
			className='grid grid-cols-4 items-center gap-10 gap-y-10 md:mx-1 lg:ml-8 '
			onClick={handleClick}
		>
			{expenses?.map(({ categoryId, categoryTitle, expenseValue, color, icon }) => {
				return (
					<Category
						id={categoryId}
						key={categoryTitle}
						title={categoryTitle}
						expenses={expenseValue}
						color={color}
						icon={icon}
					/>
				)
			})}
			<div className='grid place-items-center'>
				<AddButton onClick={() => dispatch(toggleCategoryModal(true))} />
			</div>
		</div>
	)
}
