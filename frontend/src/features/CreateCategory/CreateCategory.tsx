import { Modal } from 'components/Modal'
import { useAppDispatch, useAppSelector } from 'hooks/redux.ts'
import { toggleCategoryModal } from 'store/reducers'
import { CreateModalForm } from 'features/CreateCategory/CreateModalForm.tsx'

export const CreateCategory = () => {
	const isActive = useAppSelector((state) => state.manyModals.categoryModal)
	const dispatch = useAppDispatch()

	return (
		<Modal active={isActive} setActive={() => dispatch(toggleCategoryModal(false))}>
			<CreateModalForm />
		</Modal>
	)
}

//Todo add toast on success