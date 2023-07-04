import { ReactNode } from 'react';
import classes from './ListItem.module.scss'
interface ListItemProps {
  text: string,
  icon: ReactNode
}

export const ListItem = ({text, icon}: ListItemProps) => {
	return (
		<li
			className={`${classes.selected} flex flex-wrap flex-row py-1 px-2 items-center gap-1 font-sans text mt-0.5 rounded-md`}
		>
			<span>
				{icon}
			</span>
			<span>{text}</span>
		</li>
	)
}
