import classes from './OutlinedInput.module.scss'
import { InputProps } from 'types/InputTypes.ts'

export const OutlinedInput = ({
	name,
	id,
	label,
	type,
}: Pick<InputProps, 'name' | 'id' | 'label' | 'type'>) => {
	return (
		<div className={classes.inputGroup}>
			<label className={classes.label}>{label}</label>
			<input autoComplete='off' name={name} id={id} className={classes.input} type={type} />
		</div>
	)
}
