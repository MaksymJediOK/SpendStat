import { ChartData } from 'types/Chart.ts'
import { ExpenseCategory } from '../types'
import { colorMapping } from 'utils/colorMapping.ts'

function mapToChartData(expCategories: ExpenseCategory[] | undefined): ChartData[] | undefined {
	if (!expCategories) {
		return undefined
	}
	return expCategories.map((item) => {
		return {
			label: item.categoryTitle,
			value: item.expenseValue,
			color: colorMapping(item.color)[1],
		}
	})
}

export { mapToChartData }
