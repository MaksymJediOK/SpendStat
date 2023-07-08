import './Modal.scss'
import React, { MouseEvent } from 'react'

interface ModalProps {
	active: boolean
	setActive: (b: boolean) => void,
	children: React.ReactNode
}

export const Modal = ({ active, setActive, children }: ModalProps) => {
	return (
		<div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
			<div
				className={active ? 'modal_content active' : 'modal_content'}
				onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}
			>
				{children}
			</div>
		</div>
	)
}
