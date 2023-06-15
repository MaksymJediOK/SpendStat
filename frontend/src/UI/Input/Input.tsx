import classes from './Input.module.scss'

interface InputProps {
	name: string
	id: string
	type: 'text' | 'email' | 'number'
	label: string
}

export const Input = ({ name, id, type, label }: InputProps) => {
	return (
		<div className={classes.inputGroup}>
			<label className={classes.label}>{label}</label>
			<input autoComplete='off' name={name} id={id} className={classes.input} type={type} />
		</div>
	)
}
