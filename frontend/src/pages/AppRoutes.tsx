import { Route, Routes } from 'react-router-dom'
import { Login } from './Auth/Login/Login.tsx'
import App from '../App.tsx'
import { Registration } from "../features/Registration/Registration.tsx";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/login' element={<Login />} />
			<Route path='/registration' element={<Registration />} />
			<Route index element={<App />} />
		</Routes>
	)
}
