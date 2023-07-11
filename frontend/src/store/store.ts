import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { currencyModalReducer } from 'features/ChangeCurrency/reducer'

const rootReducer = combineReducers({
	currencyModal: currencyModalReducer,
})

export const store = configureStore({
	reducer: rootReducer,
	devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
