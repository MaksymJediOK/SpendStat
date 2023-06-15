import { Route, Routes } from 'react-router-dom'
import { Login } from './Auth/Login/Login.tsx'
import { Registration } from './Auth/Registration'
import App from '../App.tsx'

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/login' element={<Login />} />
			<Route path='/registration' element={<Registration />} />
			<Route index element={<App />} />
		</Routes>
	)
}
