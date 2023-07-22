import { FaPlus } from 'react-icons/fa'

interface AddButtonProps {
	onClick?: () => void
}

export const AddButton = ({ onClick }: AddButtonProps) => {
	return (
		<button
			className='flex h-14 w-14 items-center justify-center border-2 border-blue-400 rounded-full focus:outline-none mt-14'
			onClick={onClick}
		>
			<FaPlus className='text-blue-400' />
		</button>
	)
}
