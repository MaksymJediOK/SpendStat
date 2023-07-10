import React from 'react'

interface RoundIconProps {
	color: string
	icon: React.ReactNode
}

export const RoundIcon = ({ color, icon }: RoundIconProps) => {
	return <div data-circle='hello' className={`p-2 lg:p-4 rounded-full ${color}`}>{icon}</div>
}
