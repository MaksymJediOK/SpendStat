import { RiErrorWarningFill } from 'react-icons/ri'

interface ErrorMsgProps {
	text: string | undefined
}

export const ErrorMsg = ({ text }: ErrorMsgProps) => {
	return (
		<div className='flex flex-wrap items-center gap-2'>
			<RiErrorWarningFill color={'rgb(239 68 68)'} size={'24px'} />
			<p className='font-semibold text-red-500 py-2'>{text}</p>
		</div>
	)
}
