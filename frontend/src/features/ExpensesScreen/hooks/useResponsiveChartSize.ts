import { useEffect, useState } from 'react'
import { resizeChart } from '../utils/resizeChart.ts'

export const useResponsiveChartSize = () => {
	const [chartSize, setChartSize] = useState(resizeChart())

	useEffect(() => {
		const handleResize = () => {
			setChartSize(resizeChart())
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return chartSize
}
//Todo make it as a global hook