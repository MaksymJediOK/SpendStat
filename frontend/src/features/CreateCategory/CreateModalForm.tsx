import { useForm } from 'react-hook-form'
import { Input } from 'components/Input'
import { ErrorMsg } from 'UI/ErrorMsg'
import { RoundedButton } from 'UI/Buttons/RoundedButton'
import { NewCategory } from 'features/CreateCategory/types/NewCategory.ts'
import { useCreateNewCategoryMutation } from 'features/CreateCategory/api'

export const CreateModalForm = () => {
	const [createCategory] = useCreateNewCategoryMutation()

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<NewCategory>({
		mode: 'onBlur',
		defaultValues: { title: '', color: 'black', icon: 'shop' },
	})

	const handleCreateCategory = (data: NewCategory) => {
		createCategory(data)
			.unwrap()
			.catch((errors: any) => console.log(errors)) //create block to show errors
	}
	return (
		<form
			className='flex flex-col items-center gap-2 py-3 md:gap-5'
			onSubmit={handleSubmit(handleCreateCategory)}
		>
			<Input name='title' type='text' label='Name for your category' control={control} />
			{errors.title && <ErrorMsg text={errors?.title?.message} />}
			<Input name='color' type='text' label='Choose a color' control={control} />
			{errors.color && <ErrorMsg text={errors?.color?.message} />}
			<Input name='icon' type='text' label='Choose icon' control={control} />
			{errors.icon && <ErrorMsg text={errors?.icon?.message} />}
			<div className='mt-4 flex justify-center'>
				<RoundedButton color='black' type='submit'>
					Create
				</RoundedButton>
			</div>
		</form>
	)
}

// Todo use react-select lib for color and icons | resolvers
