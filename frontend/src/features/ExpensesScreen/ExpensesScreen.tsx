import { data, DoughnutChart } from 'components/Diagram'
import { useResponsiveChartSize } from './hooks/useResponsiveChartSize.ts'
import { CategoryList } from 'features/ExpensesScreen/ui'
import { AddExpensePopup } from 'features/addExpense'

export const ExpensesScreen = () => {
	const { radius, innerRadius } = useResponsiveChartSize()

	return (
		<>
			<div
				className='grid grid-cols-1 place-items-center
				items-center justify-center md:mt-5 md:place-items-stretch md:gap-x-12
				lg:grid-cols-[500px_minmax(0,_1fr)] lg:grid-rows-1'
			>
				<DoughnutChart data={data} radius={radius} innerRadius={innerRadius} />
				<CategoryList />
				<AddExpensePopup />
			</div>
		</>
	)
}
