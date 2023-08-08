import { OptionProps } from 'react-select'
import { IconOptionType } from 'features/CreateCategory/types/IconOptionType.ts'

export const IconComponent = ({
	label,
	data: { icon: Icon },
	innerProps,
}: OptionProps<IconOptionType, false>) => {
	return (
		<div {...innerProps} className='flex cursor-pointer items-center px-3 py-2 hover:bg-neutral-300'>
			<Icon size={18} />
			<h2 className='pl-2 font-semibold'>{label}</h2>
		</div>
	)
}
