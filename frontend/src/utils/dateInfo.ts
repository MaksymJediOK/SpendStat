interface DateInfoResult {
	num?: string
	date: string
}

function dateInfo(currentFilter: string): DateInfoResult {
	const currentDate = new Date()
	const currentYear = currentDate.getFullYear()
	const currentMonth = currentDate.toLocaleString('default', { month: 'long' })

	const shared = `${currentMonth} ${currentYear}`
	switch (currentFilter) {
		case 'today':
			const day = currentDate.getDate()
			return {
				num: '1',
				date: `${day} ${shared}`,
			}

		case 'week':
			return {
				num: '7',
				date: shared,
			}

		case 'month':
			const daysInMonth = new Date(currentYear, currentDate.getMonth() + 1, 0).getDate()
			return {
				num: daysInMonth.toString(),
				date: shared,
			}

		case 'year':
			return {
				num: '365',
				date: `year ${currentYear}`,
			}

		case 'all':
			return {
				num: '📅',
				date: 'All time',
			}

		default:
			return {
				num: '0',
				date: 'Something went wrong',
			}
	}
}

export { dateInfo }
