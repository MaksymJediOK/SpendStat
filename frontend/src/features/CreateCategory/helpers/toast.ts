import { toast } from 'react-toastify'

export function categoryToast() {
	toast.success('New category created', {
		position: 'bottom-right',
	})
}
