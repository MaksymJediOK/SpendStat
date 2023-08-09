import { stringToIconMapping } from 'features/CreateCategory/data' //Move to another dir
import { AiFillShopping } from 'react-icons/ai'
import { IconType } from 'react-icons'

function iconMapping(iconName: string): IconType {
	return stringToIconMapping[iconName as keyof typeof stringToIconMapping] || AiFillShopping
}

export { iconMapping }
