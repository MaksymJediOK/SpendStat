import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const currencySlice = createSlice({
	name: 'currencyModal',
	initialState: false,
	reducers: {
		toggleCurrencyModal(state, action: PayloadAction<boolean>) {
			state = action.payload
			return state
		},
	},
})

export const { toggleCurrencyModal } = currencySlice.actions
export const currencyModalReducer = currencySlice.reducer
