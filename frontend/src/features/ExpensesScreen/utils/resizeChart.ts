export const resizeChart = () => {
	const breakpoints = {
		sm: 640,
		md: 768,
		lg: 1024,
		xl: 1280,
		xxl: 1536,
	}
	const currentWidth = window.innerWidth
	if (currentWidth < breakpoints.sm) {
		return { radius: 70, innerRadius: 50 }
	} else if (currentWidth < breakpoints.md) {
		return { radius: 70, innerRadius: 50 }
	} else if (currentWidth < breakpoints.lg) {
		return { radius: 100, innerRadius: 70 }
	} else if (currentWidth < breakpoints.xl) {
		return { radius: 150, innerRadius: 120 }
	} else {
		return { radius: 200, innerRadius: 170 }
	}
}
