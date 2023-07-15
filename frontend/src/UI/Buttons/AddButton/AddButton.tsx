import { FaPlus } from 'react-icons/fa'

interface AddButtonProps {
	onClick?: () => void
}

export const AddButton = ({ onClick }: AddButtonProps) => {
	return (
		<button
			className='flex h-14 w-14 items-center justify-center rounded-full bg-gray-300 focus:outline-none'
			onClick={onClick}
		>
			<FaPlus className='text-gray-600' />
		</button>
	)
}
