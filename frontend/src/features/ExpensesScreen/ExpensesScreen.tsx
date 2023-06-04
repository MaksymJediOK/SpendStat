import { Category } from '../../components/Category'

export const ExpensesScreen = () => {
	return (
		<div className='container mt-6'>
			<div className='first-row flex gap-60 flex-wrap'>
				<Category title='Products' expenses={152} />
				<Category title='Products' expenses={152} />
				<Category title='Products' expenses={152} />
			</div>

		</div>
	)
}
