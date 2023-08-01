import React from 'react'
import { Category } from 'components/Category'
import { AddButton } from 'UI/Buttons/AddButton'
import { toggleCategoryModal } from 'store/reducers'
import { useAppDispatch } from 'hooks/redux.ts'
import { useGetAllExpensesQuery } from 'features/ExpensesScreen/api'
import { Navigate } from 'react-router-dom'

export const CategoryList = () => {
	const { data, error, isLoading } = useGetAllExpensesQuery('today', {
		refetchOnMountOrArgChange: true,
	})
	const dispatch = useAppDispatch()
	//will dispatch the modal window
	const handleClick = (event: React.SyntheticEvent<EventTarget>) => {
		if (!(event.target instanceof HTMLDivElement) || !(event.target instanceof HTMLDivElement)) {
			return
		}
		// console.log('ev.target', event.target.dataset['circle'])
		// const target = event.target as HTMLDivElement | SVGElement
		// const circle = target.getAttribute('data-circle')
		// console.log('Circle:', circle)
	}

	if (error && 'status' in error) {
		if (error.status === 401) {
			return <Navigate to='/registration' relative='path' />
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
				data?.map(({ categoryTitle, expenseValue }) => {
					return <Category key={categoryTitle} title={categoryTitle} expenses={expenseValue} />
				})
			)}
			<div className='grid place-items-center'>
				<AddButton onClick={() => dispatch(toggleCategoryModal(true))} />
			</div>
		</div>
	)
}
