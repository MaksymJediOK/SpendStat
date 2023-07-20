import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SidebarState {
	isOpen: boolean
}

const initialState: SidebarState = {
	isOpen: false,
}

const drawerSlice = createSlice({
	name: 'sidebar',
	initialState,
	reducers: {
		drawerToggle(state, action: PayloadAction<boolean>) {
			state.isOpen = action.payload
		},
	},
})

export const { drawerToggle } = drawerSlice.actions

export const drawerReducer = drawerSlice.reducer
