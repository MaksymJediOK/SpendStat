import 'react-toastify/dist/ReactToastify.css'
import { Sidebar } from 'components/Sidebar'
import { Header } from 'components/Header'
import { ExpensesScreen } from 'features/ExpensesScreen'
import { CurrComponent } from 'features/ChangeCurrency'
import { ToastContainer } from 'react-toastify'
import { CreateCategory } from 'features/CreateCategory'

function App() {
	return (
		<>
			<Sidebar>
				<div className='container mx-auto flex flex-col'>
					<Header />
					<ExpensesScreen />
					{/*Todo move to sidebar section*/}
					<CurrComponent />
					<CreateCategory />
					<ToastContainer />
				</div>
			</Sidebar>
		</>
	)
}

export default App
