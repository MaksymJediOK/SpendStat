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
		<ul
			className='py-2 px-1 grid grid-cols-1 gap-3 md:gap-4 grid-rows-3
			md:grid-rows-1 md:grid-cols-3 list-none justify-around items-center'
			onClick={handleChange}
		>
			{CurrencyMock.length &&
				CurrencyMock.map((item) => {
					return (
						<li
							className='border-r-2 font-semibold text-4xl flex items-center flex-col cursor-pointer'
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
	)
}
