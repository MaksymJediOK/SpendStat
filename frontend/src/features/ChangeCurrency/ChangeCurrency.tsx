import React from 'react'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { CurrencyMock } from './data/currencyMock.ts'
import { useAppDispatch } from 'hooks/redux.ts'
import { toggleCurrencyModal } from 'features/ChangeCurrency/reducer'
import { toast } from 'react-toastify'

export const ChangeCurrency = () => {
	const [_, setCurrency] = useLocalStorage('\u0024', 'currency')
	const dispatch = useAppDispatch()

	const notify = () => {
		toast.success('Currency successfully changed', {
			position: 'bottom-right',
		})
	}

	const handleChange = (event: React.SyntheticEvent<EventTarget>) => {
		const target = event.target as HTMLLIElement
		const value = target.getAttribute('data-curr')
		setCurrency(value)
		dispatch(toggleCurrencyModal(false))
		notify()
	}

	return (
		<div className='px-5 py-3 md:px-9 md:py-6'>
			<ul
				className='grid list-none grid-cols-1 grid-rows-3 items-center justify-around gap-3
				px-1 py-2 md:grid-cols-3 md:grid-rows-1 md:gap-4'
				onClick={handleChange}
			>
				{CurrencyMock.length &&
					CurrencyMock.map((item) => {
						return (
							<li
								className='flex cursor-pointer flex-col items-center border-r-2 text-4xl font-semibold'
								data-curr={item.value}
								key={item.name}
							>
								{item.value} <br />{' '}
								<span className='font-sans text-base' data-curr={item.value}>
									{item.name}
								</span>
							</li>
						)
					})}
			</ul>
		</div>
	)
}
