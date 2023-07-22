import { Category } from 'components/Category'
import { data, DoughnutChart } from 'components/Diagram'
import { useResponsiveChartSize } from './hooks/useResponsiveChartSize.ts'
import React from 'react'
import { AddButton } from 'UI/Buttons/AddButton'
import { useAppDispatch } from 'hooks/redux.ts'
import { toggleCategoryModal } from 'store/reducers'

export const ExpensesScreen = () => {
	const dispatch = useAppDispatch()
	const { radius, innerRadius } = useResponsiveChartSize()

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
		<>
			<div
				className='
			grid grid-cols-1 grid-rows-[0.5fr_minmax(0,_1fr)]
			items-center justify-center
			md:mt-5 md:grid-cols-[500px_minmax(0,_1fr)] md:grid-rows-1 md:gap-x-12'
			>
				<div className='flex justify-center'>
					<div className=''>
						<DoughnutChart data={data} radius={radius} innerRadius={innerRadius} />
					</div>
				</div>
				<div
					className='mx-auto grid grid-cols-3 grid-rows-3 items-center gap-10 md:mx-1'
					onClick={handleClick}
				>
					<Category title='Products' expenses={152} />
					<Category title='Products' expenses={152} />
					<Category title='Products' expenses={152} />
					<Category title='Products' expenses={152} />
					<Category title='Products' expenses={152} />
					<div className=''>
						<AddButton onClick={() => dispatch(toggleCategoryModal(true))} />
					</div>
				</div>
			</div>
		</>
	)
}
