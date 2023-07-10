interface ChartData {
	label: string
	value: number
	color: string
}

interface DoughnutChartProps {
	data: ChartData[]
	radius: number
	innerRadius: number
}

export const DoughnutChart = ({ data, radius, innerRadius }: DoughnutChartProps) => {
	const total = data.reduce((sum, item) => sum + item.value, 0)
	const center = radius + 10 // Center coordinates for the number

	let startAngle = 0
	let endAngle = 0

	return (
		<svg width={radius * 2 + 20} height={radius * 2 + 20}>
			{data.map((item) => {
				const percentage = (item.value / total) * 100
				endAngle = startAngle + (percentage * Math.PI * 2) / 100

				const x1 = center + Math.sin(startAngle) * radius
				const y1 = center - Math.cos(startAngle) * radius
				const x2 = center + Math.sin(endAngle) * radius
				const y2 = center - Math.cos(endAngle) * radius

				const x3 = center + Math.sin(endAngle) * innerRadius
				const y3 = center - Math.cos(endAngle) * innerRadius
				const x4 = center + Math.sin(startAngle) * innerRadius
				const y4 = center - Math.cos(startAngle) * innerRadius

				const largeArcFlagOuter = percentage > 50 ? 1 : 0
				const largeArcFlagInner = percentage > 50 ? 1 : 0

				startAngle = endAngle

				return (
					<g key={item.label}>
						<path
							d={`M${x1},${y1} A${radius},${radius} 0 
							${largeArcFlagOuter},1 
							${x2},${y2} L${x3},${y3} A
							${innerRadius},
							${innerRadius} 0 
							${largeArcFlagInner},0 
							${x4},${y4} Z`}
							fill={item.color}
						/>
						<line x1={center} y1={center} x2={x1} y2={y1} stroke='#ffffff' strokeWidth='2' />
					</g>
				)
			})}

			<text
				x={center}
				y={center}
				textAnchor='middle'
				dominantBaseline='middle'
				fontSize='24'
				fontWeight='bold'
			>
				{total}
			</text>
		</svg>
	)
}

export const data: ChartData[] = [
	{ label: 'Category 1', value: 30, color: '#dbc21f' },
	{ label: 'Category 2', value: 20, color: '#1fdbcb' },
	{ label: 'Category 3', value: 50, color: 'red' },
]
export const radius = 100
export const innerRadius = 70
