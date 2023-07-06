import { Link } from 'react-router-dom'
import { IListItem } from 'UI/ListItem/types/ListItem.ts'
import { ListItem } from 'UI/ListItem/ListItem.tsx'

interface ListBoxProps {
	heading: string
	listItems: IListItem[]
}

export const ListBox = ({ heading, listItems }: ListBoxProps) => {
	return (
		<Link to='/home'>
			<h2 className='font-light'>{heading}</h2>
			<ul className='list-none '>
				{listItems.length ? (
					<>
						{listItems.map((li: IListItem) => {
							return <ListItem key={li.text} text={li.text} icon={li.icon} />
						})}
					</>
				) : (
					''
				)}
			</ul>
		</Link>
	)
}
