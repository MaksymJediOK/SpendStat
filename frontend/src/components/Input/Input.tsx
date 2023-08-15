import { CustomInputProps } from 'types/InputTypes.ts'
import classes from './OutlinedInput.module.scss'
import { Controller, FieldValues } from 'react-hook-form'

export const Input = <T extends FieldValues>({ name, label, type, control }: CustomInputProps<T>) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<div className={`${classes.inputGroup} `}>
					<label className={classes.label}>{label}</label>
					<input
						className={`${classes.input} md:w-32 lg:w-80`}
						onFocus={(event) => event.target.select()}
						type={type}
						{...field}
					/>
				</div>
			)}
		/>
	)
}
