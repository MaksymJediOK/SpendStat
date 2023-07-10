import React from 'react'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { CurrencyMock } from './data/currencyMock.ts'

export const ChangeCurrency = () => {
	const [_, setCurrency] = useLocalStorage('dollar', 'currency')

	const handleChange = (event: React.SyntheticEvent<EventTarget>) => {
		const target = event.target as HTMLLIElement
		const value = target.getAttribute('data-curr')
		setCurrency(value)
	}

	return (
		<ul
			className='py-2 px-1 grid grid-cols-1 gap-3 md:gap-4 grid-rows-3 md:grid-rows-1  md:grid-cols-3 list-none justify-around items-center'
			onClick={handleChange}
		>
			{CurrencyMock.length &&
				CurrencyMock.map((item) => {
					return (
						<li
							className='border-r-2 font-semibold text-4xl flex items-center flex-col cursor-pointer'
							data-curr={item.name}
							key={item.name}
						>
							{item.value} <br />{' '}
							<span className='font-sans text-base' data-curr={item.name}>
								{item.name}
							</span>
						</li>
					)
				})}
		</ul>
	)
}
