import 'react-toastify/dist/ReactToastify.css'
import { Sidebar } from 'components/Sidebar'
import { Header } from 'components/Header'
import { ExpensesScreen } from 'features/ExpensesScreen'
import { CurrComponent } from 'features/ChangeCurrency'
import { ToastContainer } from 'react-toastify'

function App() {
	return (
		<>
			<Sidebar>
				<div className='container flex flex-col mx-auto'>
					<Header />
					<ExpensesScreen />
					{/*Todo move to sidebar section*/}
					<CurrComponent />
					<ToastContainer />
				</div>
			</Sidebar>
		</>
	)
}

export default App
