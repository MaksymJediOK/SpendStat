import { StylesConfig } from 'react-select'
import { IconOptionType } from 'features/CreateCategory/types'

export const iconStyles: StylesConfig<IconOptionType, false> = {
	control: (styles) => ({
		...styles,
		borderRadius: '0.5rem',
		border: '2px solid #605e5e',
		padding: '3.5px 0',
	}),
	option: (provided, state) => ({
		...provided,
		backgroundColor: state.isSelected ? '#a2a2a2' : 'transparent',
	}),
}
