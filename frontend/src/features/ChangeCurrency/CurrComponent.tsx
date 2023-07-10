import { useState } from 'react'
import { Modal } from 'components/Modal'
import { ChangeCurrency } from 'features/ChangeCurrency/ChangeCurrency.tsx'
import { RoundedButton } from 'UI/RoundedButton'

export const CurrComponent = () => {
	const [open, setOpen] = useState(false)
	// use redux to handle currComp popup and this popup
	return (
		<>
			<RoundedButton
				color='pink'
				type='button'
				isDisabled={false}
				onClick={() => setOpen((!open))}
			>
				Change currency
			</RoundedButton>
			<Modal active={open} setActive={setOpen}>
				<ChangeCurrency />
			</Modal>
		</>
	)
}
