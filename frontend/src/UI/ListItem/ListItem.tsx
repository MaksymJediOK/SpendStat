import classes from './ListItem.module.scss'
import { IListItem } from 'UI/ListItem/types/ListItem.ts'

export const ListItem = ({ text, icon: Icon }: IListItem) => {
	return (
		<li
			className={`${classes.selected} flex flex-wrap flex-row
			 py-1 px-1 md:px-2 items-center gap-1 font-sans text mt-1 md:mt-2 rounded-md`}
		>
			<span>
				<Icon />
			</span>
			<span>{text}</span>
		</li>
	)
}
