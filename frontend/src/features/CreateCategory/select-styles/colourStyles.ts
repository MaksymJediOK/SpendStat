import { StylesConfig } from 'react-select'
import { OptionsType } from 'features/CreateCategory/types'

export const colourStyles: StylesConfig<OptionsType, false> = {
	control: (styles) => ({
		...styles,
		borderRadius: '0.5rem',
		border: '2px solid #605e5e',
		padding: '3.5px 0',
	}),
	option: (provided, state) => ({
		...provided,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		padding: '4px',
		borderRadius: '50%',
		backgroundColor: state.isSelected ? state.data.value : 'transparent',
	}),
	singleValue: (provided) => ({
		...provided,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
	}),
}
