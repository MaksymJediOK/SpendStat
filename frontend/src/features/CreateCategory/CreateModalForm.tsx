import { useForm } from 'react-hook-form'
import { Input, SelectInput } from 'components/Input'
import { ErrorMsg } from 'UI/ErrorMsg'
import { RoundedButton } from 'UI/Buttons/RoundedButton'
import { NewCategory } from 'features/CreateCategory/types/NewCategory.ts'
import { useCreateNewCategoryMutation } from 'features/CreateCategory/api'
import { categoryToast } from 'features/CreateCategory/helpers/toast.ts'
import { useAppDispatch } from 'hooks/redux.ts'
import { toggleCategoryModal } from 'store/reducers'
import { colourOptions, iconOptions } from './data'
import { colourStyles, CustomOption, iconStyles } from './select-styles'
import { yupResolver } from '@hookform/resolvers/yup'
import { categoryResolver } from './schemas'

export const CreateModalForm = () => {
	const [createCategory] = useCreateNewCategoryMutation()
	const dispatch = useAppDispatch()
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<NewCategory>({
		mode: 'onBlur',
		defaultValues: { title: '', color: colourOptions[0].value, icon: 'shop' },
		resolver: yupResolver(categoryResolver),
	})

	const handleCreateCategory = (data: NewCategory) => {
		console.log(data)
		createCategory(data)
			.unwrap()
			.then(() => {
				dispatch(toggleCategoryModal(false))
				categoryToast()
			})
			.catch((errors: any) => console.log(errors))
		// create block to show errors
	}
	return (
		<form
			className='flex flex-col items-center gap-2 py-3 md:gap-5'
			onSubmit={handleSubmit(handleCreateCategory)}
		>
			<Input name='title' type='text' label='Name for your category' control={control} />
			{errors.title && <ErrorMsg text={errors?.title?.message} />}

			<SelectInput
				control={control}
				name='color'
				options={colourOptions}
				placeholder='Choose a color'
				styles={colourStyles}
				Options={CustomOption}
			/>
			{errors.color && <ErrorMsg text={errors?.color?.message} />}
			<SelectInput
				name='icon'
				placeholder='Choose an icon'
				control={control}
				options={iconOptions}
				styles={iconStyles}
			/>
			{errors.icon && <ErrorMsg text={errors?.icon?.message} />}

			<div className='mt-4 flex justify-center'>
				<RoundedButton color='black' type='submit'>
					Create
				</RoundedButton>
			</div>
		</form>
	)
}
