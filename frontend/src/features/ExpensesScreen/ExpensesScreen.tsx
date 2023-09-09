import { CategoryList, Doughnut } from 'features/ExpensesScreen/ui'
import { AddExpensePopup } from 'features/addExpense'
import { useGetAllExpensesQuery } from 'features/ExpensesScreen/api'
import { useAppSelector } from 'hooks/redux.ts'
import { Navigate } from 'react-router-dom'

export const ExpensesScreen = () => {
	const filter = useAppSelector((state) => state.manyModals.timeRangeModal.filter) || 'all'
	const { data, error, isLoading } = useGetAllExpensesQuery(filter, {
		refetchOnMountOrArgChange: true,
	})

	const isEmptyData = !data || data.length === 0

	if (error && 'status' in error) {
		if (error.status === 401) {
			return <Navigate to='/expired' relative='path' />
		}
	}

	return (
		<>
			<div
				className='grid grid-cols-1 place-items-center
				items-center justify-center md:mt-5 md:place-items-stretch md:gap-x-12
				lg:grid-cols-[500px_minmax(0,_1fr)] lg:grid-rows-1'
			>
				{isLoading ? (
					<h2>Loading...</h2>
				) : isEmptyData ? (
					<h2>No data available</h2>
				) : (
					<>
						<Doughnut data={data} />
						<CategoryList expenses={data} />
					</>
				)}

				<AddExpensePopup />
			</div>
		</>
	)
}
