import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { ExpensesScreen } from './features/ExpensesScreen/ExpensesScreen.tsx'

function App() {
	return (
		<>
			<Sidebar>
				<div className='container flex flex-col mx-auto'>
					<Header />
					<ExpensesScreen />
				</div>
			</Sidebar>
		</>
	)
}

export default App
