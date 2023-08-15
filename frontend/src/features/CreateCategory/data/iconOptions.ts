import { IconOptionType } from '../types'
import { stringToIconMapping } from 'utils'

const iconOptions: IconOptionType[] = Object.keys(stringToIconMapping).map((key) => ({
	value: key,
	label: key.charAt(0).toUpperCase() + key.slice(1),
	icon: stringToIconMapping[key as keyof typeof stringToIconMapping],
}))

export { iconOptions }
