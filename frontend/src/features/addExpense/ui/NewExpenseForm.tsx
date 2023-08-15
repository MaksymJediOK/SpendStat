import { useForm } from 'react-hook-form'
import { Input } from 'components/Input'
import { Expense } from 'types'
import { ErrorMsg } from 'UI/ErrorMsg'
import { RoundedButton } from 'UI/Buttons/RoundedButton'
import { yupResolver } from '@hookform/resolvers/yup'
import { expenseSchema } from '../schemas'

const NewExpenseForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<Expense>({
		defaultValues: { value: 0, title: '' },
		resolver: yupResolver(expenseSchema),
	})

	const handleNewExpense = () => {}

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
