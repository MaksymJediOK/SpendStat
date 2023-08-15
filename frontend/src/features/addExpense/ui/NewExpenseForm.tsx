import { useForm } from 'react-hook-form'
import { Input } from 'components/Input'
import { Expense } from 'types'
import { ErrorMsg } from 'UI/ErrorMsg'
import { RoundedButton } from 'UI/Buttons/RoundedButton'
import { yupResolver } from '@hookform/resolvers/yup'
import { expenseSchema } from '../schemas'
import { useCreateNewExpenseMutation } from '../api'
import { useAppDispatch } from 'hooks/redux.ts'
import { toggleExpenseModal } from 'store/reducers'

interface ExpenseFormProps {
	categoryId: string
}

const NewExpenseForm = ({ categoryId }: ExpenseFormProps) => {
	const [createNewExpense] = useCreateNewExpenseMutation()
	const dispatch = useAppDispatch()
	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Expense>({
		defaultValues: { value: 0, title: '' },
		resolver: yupResolver(expenseSchema),
	})

	const handleNewExpense = async ({ value, title }: Expense) => {
		const parsedId = parseInt(categoryId)
		try {
			await createNewExpense({ value, title, categoryId: parsedId })
				.unwrap()
				.then(() => {
					dispatch(toggleExpenseModal({ isOpen: false }))
				})
			reset()
		} catch (e) {
			console.log(e)
		}
		//Handle errors
	}

	return (
		<form onSubmit={handleSubmit(handleNewExpense)} className='flex flex-col items-center px-5 py-2'>
			<Input name='value' type='number' label='Expense' control={control} />
			{errors.value && <ErrorMsg text={errors?.value?.message} />}
			<Input name='title' type='text' label='Notes' control={control} />
			{errors.title && <ErrorMsg text={errors?.title?.message} />}
			<RoundedButton color='black' type='submit'>
				Add
			</RoundedButton>
		</form>
	)
}

export { NewExpenseForm }
