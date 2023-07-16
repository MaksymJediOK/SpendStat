import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { currencyModalReducer } from 'features/ChangeCurrency/reducer'
import { authApi, expenseApi, categoryApi } from '../services'
import { modalsReducer } from './reducers'

const rootReducer = combineReducers({
	currencyModal: currencyModalReducer,
	manyModals: modalsReducer,
	[expenseApi.reducerPath]: expenseApi.reducer,
	[categoryApi.reducerPath]: categoryApi.reducer,
	[authApi.reducerPath]: authApi.reducer,
})

export const store = configureStore({
	reducer: rootReducer,
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(expenseApi.middleware, categoryApi.middleware, authApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
