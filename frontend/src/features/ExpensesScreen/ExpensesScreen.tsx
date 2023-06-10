import { Category } from "components/Category"
import classes from './ExpensesScreen.module.css'
import { data, DoughnutChart } from "components/Diagram"
import { useResponsiveChartSize } from './hooks/useResponsiveChartSize.ts'

export const ExpensesScreen = () => {
	const chartSize = useResponsiveChartSize()

	return (
		<>
			<div className={classes.parentGrid}>
				<div className={classes.div1}>
					<Category title='Products' expenses={152} />
				</div>
				<div className={classes.div2}>
					<Category title='Products' expenses={152} />
				</div>
				<div className={classes.div3}>
					<Category title='Products' expenses={152} />
				</div>
				<div className={classes.div4}>
					<Category title='Products' expenses={152} />
				</div>
				<div className={classes.div5}>
					<Category title='Products' expenses={152} />
				</div>
				<div className={classes.div6}>
					<DoughnutChart
						data={data}
						radius={chartSize.radius}
						innerRadius={chartSize.innerRadius}
					/>
				</div>
				<div className={classes.div7}>
					<Category title='Products' expenses={152} />
				</div>
				<div className={classes.div8}>
					<Category title='Products' expenses={152} />
				</div>
				<div className={classes.div9}>
					<Category title='Products' expenses={152} />
				</div>
				<div className={classes.div10}>
					<Category title='Products' expenses={152} />
				</div>
				<div className={classes.div11}>
					<Category title='Products' expenses={152} />
				</div>
				<div className={classes.div12}>
					<Category title='Products' expenses={152} />
				</div>
				<div className={classes.div13}>
					<Category title='Products' expenses={152} />
				</div>
			</div>
		</>
	)
}
