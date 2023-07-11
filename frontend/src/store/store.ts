import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { currencyModalReducer } from 'features/ChangeCurrency/reducer'
import { expenseApi } from '../services'
import { expenseModalReducer } from 'features/addExpense/reducers'

const rootReducer = combineReducers({
	currencyModal: currencyModalReducer,
	expenseModal: expenseModalReducer,
	[expenseApi.reducerPath]: expenseApi.reducer,
})

export const store = configureStore({
	reducer: rootReducer,
	devTools: true,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(expenseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
