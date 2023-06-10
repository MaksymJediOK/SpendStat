import { Route, Routes } from 'react-router-dom'
import { Login } from './Auth/Login/Login.tsx'
import App from '../App.tsx'

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/login' element={<Login />} />
			<Route index element={<App />} />
		</Routes>
	)
}
