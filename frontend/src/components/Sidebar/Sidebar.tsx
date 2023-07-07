import React from 'react'
import { HiMenu } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { MenuOptions } from './MenuOptions.ts'
import { useState } from 'react'

interface SidebarProps {
	children: React.ReactNode
}

export const Sidebar = ({ children }: SidebarProps) => {
	const [isOpen, setOpen] = useState(false)

	return (
		<section className='flex gap-6'>
			<div
				className={`bg-[#0e0e0e] min-h-screen ${
					isOpen ? 'w-72' : 'w-16'
				} duration-500 text-gray-100 px-4`}
			>
				<div className='py-3 flex justify-end'>
					<HiMenu size={26} className='cursor-pointer' onClick={() => setOpen(!isOpen)} />
				</div>
				<div className='mt-4 flex flex-col gap-4 relative'>
					{MenuOptions?.map(({ name, link, icon: IconComponent }, index) => {
						return (
							<Link
								to={link}
								key={name}
								className='flex items-center text-lg gap-3.5 font-semibold p-2 hover:bg-gray-800 rounded-md'
							>
								<div>
									<IconComponent size={20} />
								</div>
								<h2
									style={{ transitionDelay: `${index + 3}00ms` }}
									className={`whitespace-pre duration-500 ${
										!isOpen && 'opacity-0 translate-x-28 overflow-hidden'
									}`}
								>
									{name}
								</h2>
							</Link>
						)
					})}
				</div>
			</div>
			{children}
		</section>
	)
}
