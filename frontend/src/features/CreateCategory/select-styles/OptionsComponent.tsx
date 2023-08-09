import { OptionProps } from 'react-select'
import { BaseSelectOption } from 'types'
import { colorMapping } from 'utils'

export const CustomOption = ({ label, innerProps }: OptionProps<BaseSelectOption, false>) => {
	const dynamicClass = colorMapping(label)
	return (
		<div {...innerProps} className='flex cursor-pointer items-center px-3 py-2 hover:bg-neutral-300'>
			<div className={`mr-2 h-4 w-4 rounded-full ${dynamicClass}`} />
			{label}
		</div>
	)
}
