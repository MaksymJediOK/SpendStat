import { useGetTotalQuery } from 'components/Header/ui/Total/getTotal.endpoint.ts'

const Total = () => {
	const { data, isLoading } = useGetTotalQuery()

	return !isLoading && data ? (
		<h2 className='my-1 text-xl font-semibold tracking-wide'>{`-${data}$`}</h2>
	) : null
}

export { Total }
