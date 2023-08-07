import { OptionsType } from 'features/CreateCategory/types'
import { AiFillBook } from 'react-icons/ai'

export const iconOptions: readonly OptionsType[] = [
	{ value: 'shopping', label: 'Shopping' },
	{ value: 'book', label: 'Book' },
	{ value: 'heart', label: 'Heart' },
	{ value: 'skin', label: 'Skin' },
	{ value: 'home', label: 'Home' },
	{ value: 'tags', label: 'Tags' },
	{ value: 'car', label: 'Car' },
	{ value: 'compass', label: 'Compass' },
]

export const iconMap = {
	shopping: AiFillBook,
}
