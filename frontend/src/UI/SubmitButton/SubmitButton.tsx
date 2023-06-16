import classes from './SubmitButton.module.scss'

interface SubmitButtonProps {
	buttonText: string
}
export const SubmitButton = ({ buttonText }: SubmitButtonProps) => (
	<button role='button' type='submit' className={classes.btn}>
		{buttonText}
	</button>
)
