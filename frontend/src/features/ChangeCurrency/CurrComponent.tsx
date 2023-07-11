import { Modal } from 'components/Modal'
import { ChangeCurrency } from 'features/ChangeCurrency/ChangeCurrency.tsx'
import { RoundedButton } from 'UI/RoundedButton'
import { useAppDispatch, useAppSelector } from 'hooks/redux.ts'
import { toggleCurrencyModal } from 'features/ChangeCurrency/reducer'

export const CurrComponent = () => {
	const isOpen = useAppSelector((state) => state.currencyModal)
	const dispatch = useAppDispatch()
	return (
		<>
			<RoundedButton
				color='pink'
				type='button'
				isDisabled={false}
				onClick={() => dispatch(toggleCurrencyModal(!isOpen))}
			>
				Change currency
			</RoundedButton>
			<Modal active={isOpen} setActive={() => dispatch(toggleCurrencyModal(false))}>
				<ChangeCurrency />
			</Modal>
		</>
	)
}
