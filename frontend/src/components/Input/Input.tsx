import { Controller } from 'react-hook-form'
import { InputProps } from 'types/InputTypes.ts'
import classes from './OutlinedInput.module.scss'

export const Input = ({ control, name, id, type, label, errors }: InputProps) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => (
				<div>
					<div className={classes.inputGroup}>
						<label className={classes.label}>{label}</label>
						<input
							autoComplete='off'
							id={id}
							className={classes.input}
							type={type}
							{...field}
						/>
					</div>
					{errors && <div>error occurred</div>}
				</div>
			)}
		/>
	)
}
