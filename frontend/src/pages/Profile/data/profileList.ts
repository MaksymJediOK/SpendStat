import { IListItem } from 'UI/ListItem/types/ListItem.ts'
import { GoBell, GoGear, GoPencil, GoPerson } from 'react-icons/go'

export const profileList: IListItem[] = [
	{ text: 'Public profile', icon: GoPerson },
	{ text: 'Account', icon: GoGear },
	{ text: 'Notifications', icon: GoBell },
	{ text: 'Appearance', icon: GoPencil },
]
