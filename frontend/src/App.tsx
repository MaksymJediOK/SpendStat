import 'react-toastify/dist/ReactToastify.css'
import { Header } from 'components/Header'
import { ExpensesScreen } from 'features/ExpensesScreen'
import { CurrencyComponent } from 'features/ChangeCurrency'
import { ToastContainer } from 'react-toastify'
import { CreateCategory } from 'features/CreateCategory'
import { Drawer } from 'components/Drawer'
import { TimeRange } from 'features/TimeRange'

function App() {
	return (
		<>
			<Header />
			<Drawer />
			<div className='container mx-auto flex flex-col'>
				<ExpensesScreen />
				<CurrencyComponent />
				<CreateCategory />
				<TimeRange />
				<ToastContainer />
			</div>
		</>
	)
}

export default App
