import {
	AiFillBook,
	AiFillCompass,
	AiFillHeart,
	AiFillShopping,
	AiFillSkin,
	AiFillTags,
	AiOutlineCar,
	AiOutlineHome,
} from 'react-icons/ai'
import { IconType } from 'react-icons'

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

function iconMapping(iconName: string): IconType {
	return stringToIconMapping[iconName as keyof typeof stringToIconMapping] || AiFillShopping
}

export { iconMapping, stringToIconMapping }
