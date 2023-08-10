import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ExpenseModalProps {
	isOpen: boolean
	id?: string | null
}

interface initialStateProps {
	expenseModal: ExpenseModalProps
	categoryModal: boolean
}

const initialState: initialStateProps = {
	expenseModal: {
		isOpen: false,
		id: null,
	},
	categoryModal: false,
}

const modalsSlice = createSlice({
	name: 'modals',
	initialState,
	reducers: {
		toggleExpenseModal(state, action: PayloadAction<ExpenseModalProps>) {
			const { isOpen, id } = action.payload
			state.expenseModal.isOpen = isOpen
			if (id) state.expenseModal.id = id
		},
		toggleCategoryModal(state, action: PayloadAction<boolean>) {
			state.categoryModal = action.payload
		},
	},
})
export const { toggleCategoryModal, toggleExpenseModal } = modalsSlice.actions
export const modalsReducer = modalsSlice.reducer
