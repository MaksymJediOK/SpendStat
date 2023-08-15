import { RoundIcon } from 'UI/RoundIcon'
import { colorMapping } from 'utils/colorMapping.ts'
import { iconMapping } from 'utils/iconMapping.ts'
import { useGetSingleCategoryQuery } from '../api'

 interface NewExpenseProps {
	categoryId: string
}

const NewExpenseHeader = ({ categoryId }: NewExpenseProps) => {
	const { data, isLoading } = useGetSingleCategoryQuery(categoryId)

	const color = data?.color || 'Ocean'
	const title = data?.title || 'Category'
	const Icon = iconMapping(data?.icon || 'home')
	const categoryColors = colorMapping(color)

	return (
		<>
			{isLoading ? (
				<h2>Loading...</h2>
			) : (
				<div
					className={`flex items-center justify-between rounded-t-xl ${categoryColors[0]} px-5 py-3 md:px-10 md:py-8`}
				>
					<div className='flex flex-col text-white'>
						<span className='text-sm'>To category {categoryId}</span>
						<h2 className='text-base font-semibold'>{title}</h2>
					</div>
					<RoundIcon color='bg-[#fff]' icon={<Icon color={categoryColors[1]} size={24} />} />
				</div>
			)}
		</>
	)
}

export { NewExpenseHeader }
