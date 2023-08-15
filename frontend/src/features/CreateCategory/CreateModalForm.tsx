import { useForm } from 'react-hook-form'
import { Input, SelectInput } from 'components/Input'
import { ErrorMsg } from 'UI/ErrorMsg'
import { RoundedButton } from 'UI/Buttons/RoundedButton'
import { Category } from 'types'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAppDispatch } from 'hooks/redux.ts'
import { toggleCategoryModal } from 'store/reducers'
import { useCreateNewCategoryMutation } from './api'
import { categoryToast } from './helpers'
import { colourOptions, iconOptions } from './data'
import { colourStyles, CustomOption, IconComponent, iconStyles } from './select-styles'
import { categoryResolver } from './schemas'
import { IconOptionType } from './types'

export const CreateModalForm = () => {
	const [createCategory] = useCreateNewCategoryMutation()
	const dispatch = useAppDispatch()
	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Category>({
		mode: 'onBlur',
		defaultValues: { title: '', color: 'Ocean', icon: 'shopping' },
		resolver: yupResolver(categoryResolver),
	})

	const handleCreateCategory = (data: Category) => {
		console.log(data)
		createCategory(data)
			.unwrap()
			.then(() => {
				dispatch(toggleCategoryModal(false))
				categoryToast()
				reset()
			})
			.catch((errors: any) => console.log(errors))
		// create block to show errors
	}
	return (
		<div className='px-5 py-3 md:px-9 md:py-6'>
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
					CustomOption={CustomOption}
				/>
				{errors.color && <ErrorMsg text={errors?.color?.message} />}
				<SelectInput<Category, IconOptionType>
					name='icon'
					placeholder='Choose an icon'
					control={control}
					options={iconOptions}
					styles={iconStyles}
					CustomOption={IconComponent}
				/>
				{errors.icon && <ErrorMsg text={errors?.icon?.message} />}

				<div className='mt-4 flex justify-center'>
					<RoundedButton color='black' type='submit'>
						Create
					</RoundedButton>
				</div>
			</form>
		</div>
	)
}
