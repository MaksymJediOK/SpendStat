import classes from './ListItem.module.scss'
import { IListItem } from 'UI/ListItem/types/ListItem.ts'

export const ListItem = ({ text, icon }: IListItem) => {
	return (
		<li
			className={`${classes.selected} flex flex-wrap flex-row
			 py-1 px-2 items-center gap-1 font-sans text mt-0.5 rounded-md`}
		>
			<span>{icon}</span>
			<span>{text}</span>
		</li>
	)
}
