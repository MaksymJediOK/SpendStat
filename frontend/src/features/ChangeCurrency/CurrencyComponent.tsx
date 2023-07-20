import { Modal } from 'components/Modal'
import { ChangeCurrency } from 'features/ChangeCurrency/ChangeCurrency.tsx'
import { useAppDispatch, useAppSelector } from 'hooks/redux.ts'
import { toggleCurrencyModal } from 'features/ChangeCurrency/reducer'

export const CurrencyComponent = () => {
	const isOpen = useAppSelector((state) => state.currencyModal)
	const dispatch = useAppDispatch()
	return (
		<>
			<Modal active={isOpen} setActive={() => dispatch(toggleCurrencyModal(false))}>
				<ChangeCurrency />
			</Modal>
		</>
	)
}
