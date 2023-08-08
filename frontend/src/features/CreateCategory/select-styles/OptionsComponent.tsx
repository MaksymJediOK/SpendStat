import { OptionProps } from 'react-select'
import { BaseSelectOption } from 'types'

export const CustomOption = ({ label, data, innerProps }: OptionProps<BaseSelectOption, false>) => (
	<div {...innerProps} className='flex cursor-pointer items-center px-3 py-2 hover:bg-neutral-300'>
		<div className='mr-2 h-4 w-4 rounded-full' style={{ backgroundColor: data.value as string }} />
		{label}
	</div>
)
