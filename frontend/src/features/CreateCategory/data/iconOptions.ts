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
import { IconOptionType } from '../types'

const iconOptions: IconOptionType[] = [
	{ value: 'shopping', label: 'Shopping', icon: AiFillShopping },
	{ value: 'book', label: 'Book', icon: AiFillBook },
	{ value: 'heart', label: 'Heart', icon: AiFillHeart },
	{ value: 'skin', label: 'Skin', icon: AiFillSkin },
	{ value: 'home', label: 'Home', icon: AiOutlineHome },
	{ value: 'tags', label: 'Tags', icon: AiFillTags },
	{ value: 'car', label: 'Car', icon: AiOutlineCar },
	{ value: 'compass', label: 'Compass', icon: AiFillCompass },
]

const stringToIconMapping = {
	shopping: AiFillShopping,
	book: AiFillBook,
	heart: AiFillHeart,
	skin: AiFillSkin,
	home: AiOutlineHome,
	tags: AiFillTags,
	car: AiOutlineCar,
	compass: AiFillCompass,
}

export { iconOptions, stringToIconMapping }
