import { OptionProps } from 'react-select'
import { ColourOption } from 'features/CreateCategory/types'

export const CustomOption = ({ label, data, innerProps }: OptionProps<ColourOption, false>) => (
	<div {...innerProps} className='flex cursor-pointer items-center px-3 py-2 hover:bg-neutral-300'>
		<div className='mr-2 h-4 w-4 rounded-full' style={{ backgroundColor: data.value as string }} />
		{label}
	</div>
)
