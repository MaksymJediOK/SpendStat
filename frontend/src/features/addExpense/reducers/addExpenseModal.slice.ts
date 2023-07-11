import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const addExpenseModalSlice = createSlice({
	name: 'addExpenseModal',
	initialState: false,
	reducers: {
		toggleExpenseModal(state, action: PayloadAction<boolean>) {
			state = action.payload
			return state
		},
	},
})

export const { toggleExpenseModal } = addExpenseModalSlice.actions
export const expenseModalReducer = addExpenseModalSlice.reducer
