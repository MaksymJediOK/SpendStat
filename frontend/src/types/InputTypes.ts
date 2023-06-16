import { Control } from 'react-hook-form'
import { RegistrationFormData } from 'types/Auth.ts'

export interface InputProps {
	name: string
	id: string
	type: 'text' | 'email' | 'number'
	label: string
	control: Control<RegistrationFormData>
	errors?: string
}
