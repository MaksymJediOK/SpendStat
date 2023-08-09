import React from 'react'

interface RoundIconProps {
	color: string
	icon: React.ReactNode
}

export const RoundIcon = ({ color, icon }: RoundIconProps) => (
	<div className={`cursor-pointer rounded-full p-2 lg:p-4 ${color}`} >
		{icon}
	</div>
)
