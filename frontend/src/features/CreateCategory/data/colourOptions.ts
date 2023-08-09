import { BaseSelectOption } from 'types'
import { colorNameToClassMapping } from 'utils'

export const colourOptions: readonly BaseSelectOption[] = Object.keys(colorNameToClassMapping).map(
	(colorName) => ({
		value: colorName,
		label: colorName,
	})
)
