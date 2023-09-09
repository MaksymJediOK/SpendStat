import { DoughnutChart } from 'components/Diagram'
import { mapToChartData } from 'features/ExpensesScreen/utils'
import { ExpenseCategory } from 'features/ExpensesScreen/types'
import { useResponsiveChartSize } from 'features/ExpensesScreen/hooks'

const Doughnut = ({ data }: { data: ExpenseCategory[] }) => {
	const { radius, innerRadius } = useResponsiveChartSize()
	const mapped = mapToChartData(data)
	return <DoughnutChart expenses={mapped} radius={radius} innerRadius={innerRadius} />
}

export { Doughnut }
