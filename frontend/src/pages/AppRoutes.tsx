import { Route, Routes } from 'react-router-dom'
import App from '../App.tsx'
import { Registration } from 'features/Registration'
import { SignIn } from 'features/SignIn'
import { TestPage } from './Testpage/TestPage.tsx';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/login' element={<SignIn />} />
			<Route path='/registration' element={<Registration />} />
			<Route path='/test' element={<TestPage/>} />
			<Route index element={<App />} />
		</Routes>
	)
}
