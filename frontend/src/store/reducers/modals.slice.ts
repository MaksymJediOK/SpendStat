import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ExpenseModalProps {
	isOpen: boolean
	id?: string | null
}

interface TimeRangeModalProps extends Omit<ExpenseModalProps, 'id'> {
	filter?: string
}

interface initialStateProps {
	expenseModal: ExpenseModalProps
	categoryModal: boolean
	timeRangeModal: TimeRangeModalProps
}

const initialState: initialStateProps = {
	expenseModal: {
		isOpen: false,
		id: null,
	},
	categoryModal: false,
	timeRangeModal: {
		isOpen: false,
		filter: 'all',
	},
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
		toggleTimeRangeModal(state, action: PayloadAction<TimeRangeModalProps>) {
			const { isOpen, filter } = action.payload
			state.timeRangeModal.isOpen = isOpen
			if (filter) state.timeRangeModal.filter = filter
		},
	},
})
export const { toggleCategoryModal, toggleExpenseModal, toggleTimeRangeModal } = modalsSlice.actions

export const modalsReducer = modalsSlice.reducer
