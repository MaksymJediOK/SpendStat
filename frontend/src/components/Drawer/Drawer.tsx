import { DrawerContent } from 'components/Drawer/DrawerContent.tsx'
import { drawerToggle } from 'store/reducers'
import { useAppDispatch, useAppSelector } from 'hooks/redux.ts'

export const Drawer = () => {
	const isOpen = useAppSelector((state) => state.drawer.isOpen)
	const dispatch = useAppDispatch()

	return (
		<>
			<DrawerContent active={isOpen} setActive={() => dispatch(drawerToggle(false))} />
		</>
	)
}
