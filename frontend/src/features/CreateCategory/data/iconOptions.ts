import {
	AiFillShopping,
	AiFillBook,
	AiFillCompass,
	AiFillHeart,
	AiFillSkin,
	AiOutlineHome,
	AiFillTags,
	AiOutlineCar,
} from 'react-icons/ai'
import { IconOptionType } from 'features/CreateCategory/types/IconOptionType.ts'

export const iconOptions: IconOptionType[] = [
	{ value: 'shopping', label: 'Shopping', icon: AiFillShopping },
	{ value: 'book', label: 'Book', icon: AiFillBook },
	{ value: 'heart', label: 'Heart', icon: AiFillHeart },
	{ value: 'skin', label: 'Skin', icon: AiFillSkin },
	{ value: 'home', label: 'Home', icon: AiOutlineHome },
	{ value: 'tags', label: 'Tags', icon: AiFillTags },
	{ value: 'car', label: 'Car', icon: AiOutlineCar },
	{ value: 'compass', label: 'Compass', icon: AiFillCompass },
]
