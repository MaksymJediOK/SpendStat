import { Control, FieldValues, Path } from 'react-hook-form'
import { RegistrationFormData } from 'types/Auth.ts'

export interface InputProps {
	name: 'nickname' | 'password' | 'gender'
	id: string
	type: 'text' | 'email' | 'number'
	label: string
	control: Control<RegistrationFormData>
	errors?: string
}

export interface CustomInputProps<T extends FieldValues> {
	name: Path<T>
	type: 'text' | 'email' | 'number' | 'password'
	label: string
	control: Control<T>
}
