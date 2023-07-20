import { Category } from 'components/Category'
import classes from './ExpensesScreen.module.css'
import { data, DoughnutChart } from 'components/Diagram'
import { useResponsiveChartSize } from './hooks/useResponsiveChartSize.ts'
import React, { useRef } from 'react'
import { AddButton } from 'UI/Buttons/AddButton'
import { useAppDispatch } from 'hooks/redux.ts'
import { toggleCategoryModal } from 'store/reducers'

export const ExpensesScreen = () => {
	const dispatch = useAppDispatch()
	const { radius, innerRadius } = useResponsiveChartSize()

	const gridRef = useRef<HTMLDivElement>(null)
	const handleClick = (event: React.SyntheticEvent<EventTarget>) => {
		if (!(event.target instanceof HTMLDivElement) || !(event.target instanceof HTMLDivElement)) {
			return
		}
		// console.log('ev.target', event.target.dataset['circle'])
		// const target = event.target as HTMLDivElement | SVGElement
		// const circle = target.getAttribute('data-circle')
		// console.log('Circle:', circle)

	}
	return (


		<div className={classes.parentGrid} ref={gridRef} onClick={handleClick}>
			<div className={classes.div1}>content</div>
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
				<DoughnutChart data={data} radius={radius} innerRadius={innerRadius} />
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
				<AddButton onClick={() => dispatch(toggleCategoryModal(true))} />
			</div>
		</div>
	)
}
