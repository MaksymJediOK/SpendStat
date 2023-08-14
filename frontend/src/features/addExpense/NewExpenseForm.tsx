// import { useGetSingleCategoryQuery } from './api'
import { RoundIcon } from 'UI/RoundIcon'
import { AiFillShopping } from 'react-icons/ai'
import { useForm } from 'react-hook-form'
import { Input } from 'components/Input'
import { Expense } from 'types'
import { ErrorMsg } from 'UI/ErrorMsg'
import { RoundedButton } from 'UI/Buttons/RoundedButton'

interface NewExpenseProps {
	categoryId: string
}

const NewExpenseForm = ({ categoryId }: NewExpenseProps) => {
	console.log(categoryId)
	// const { data, error, isLoading } = useGetSingleCategoryQuery(categoryId)
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<Expense>({
		defaultValues: { value: 0, title: '' },
	})

	const handleNewExpense = () => {}
	return (
		<>
			<div className='flex items-center justify-between rounded-t-xl bg-pink-800 px-5 py-3 md:px-10 md:py-8'>
				<div className='flex flex-col text-white'>
					<span className='text-sm'>To category</span>
					<h2 className='text-base font-semibold'>Category Name</h2>
				</div>
				<RoundIcon color='bg-[#fff] ' icon={<AiFillShopping size={24} />} />
			</div>
			<form onSubmit={handleSubmit(handleNewExpense)} className='flex flex-col items-center px-5 py-2'>
				<Input name='value' type='number' label='Expense' control={control} />
				{errors.value && <ErrorMsg text={errors?.value?.message} />}
				<Input name='title' type='text' label='Notes' control={control} />
				{errors.title && <ErrorMsg text={errors?.title?.message} />}
				<RoundedButton color='black' type='submit'>
					Add
				</RoundedButton>
			</form>
		</>
	)
}

export { NewExpenseForm }
//Todo add validation schema
