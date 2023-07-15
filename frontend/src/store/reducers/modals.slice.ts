import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface initialStateProps {
	expenseModal: boolean
	categoryModal: boolean
}

const initialState: initialStateProps = {
	expenseModal: false,
	categoryModal: false,
}

const modalsSlice = createSlice({
	name: 'addModals',
	initialState,
	reducers: {
		toggleExpenseModal(state, action: PayloadAction<boolean>) {
			state.expenseModal = action.payload
		},
		toggleCategoryModal(state, action: PayloadAction<boolean>) {
			state.categoryModal = action.payload
		},
	},
})
export const { toggleCategoryModal, toggleExpenseModal } = modalsSlice.actions
export const modalsReducer = modalsSlice.reducer
