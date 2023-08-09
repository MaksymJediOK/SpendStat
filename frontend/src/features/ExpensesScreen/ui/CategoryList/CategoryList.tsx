import React from 'react'
import { Category } from 'components/Category'
import { AddButton } from 'UI/Buttons/AddButton'
import { toggleCategoryModal, toggleExpenseModal } from 'store/reducers'
import { useAppDispatch } from 'hooks/redux.ts'
import { useGetAllExpensesQuery } from 'features/ExpensesScreen/api'
import { Navigate } from 'react-router-dom'

export const CategoryList = () => {
	const dispatch = useAppDispatch()
	const { data, error, isLoading } = useGetAllExpensesQuery('today', {
		refetchOnMountOrArgChange: true,
	})

	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		const targetElement = event.target as HTMLElement
		const categoryElement = targetElement.closest('.category')
		if (categoryElement) {
			console.log(categoryElement)
			dispatch(toggleExpenseModal(true))
		}
	}

	if (error && 'status' in error) {
		if (error.status === 401) {
			return <Navigate to='/expired' relative='path' />
		}
	}
	return (
		<div
			className='grid grid-cols-4 items-center gap-10 gap-y-10 md:mx-1 lg:ml-8 '
			onClick={handleClick}
		>
			{isLoading ? (
				<h2>Loading...</h2>
			) : (
				data?.map(({ categoryTitle, expenseValue,color }) => {
					return <Category key={categoryTitle} title={categoryTitle} expenses={expenseValue} color={color}/>
				})
			)}
			<div className='grid place-items-center'>
				<AddButton onClick={() => dispatch(toggleCategoryModal(true))} />
			</div>
		</div>
	)
}
