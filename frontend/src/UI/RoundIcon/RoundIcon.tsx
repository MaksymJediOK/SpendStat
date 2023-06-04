import React from 'react'

interface RoundIconProps {
	color: string
	icon: React.ReactNode
}

export const RoundIcon = ({ color, icon }: RoundIconProps) => {
	return <div className={`p-4 rounded-full bg-${color}`}>{icon}</div>
}
