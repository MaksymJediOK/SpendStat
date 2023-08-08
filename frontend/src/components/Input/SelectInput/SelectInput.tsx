import React from 'react'
import Select, { OptionProps, StylesConfig } from 'react-select'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { BaseSelectOption } from 'types/BaseSelectOption.ts'


interface SelectInputProps<T extends FieldValues, U extends BaseSelectOption> {
	name: Path<T>
	placeholder: string
	control: Control<T>
	options: readonly U[]
	styles?: StylesConfig<U, false>
	CustomOption?: React.ComponentType<OptionProps<U, false>> | null
}

export const SelectInput = <T extends FieldValues, U extends BaseSelectOption>({
	name,
	placeholder,
	options,
	control,
	styles,
	CustomOption,
}: SelectInputProps<T, U>) => {
	const components = CustomOption ? { Option: CustomOption } : undefined

	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { ref, onChange, value } }) => (
				<Select
					className='w-full border-black'
					ref={ref}
					components={components}
					placeholder={placeholder}
					defaultValue={options[0]}
					options={options}
					value={options.find((c) => c.value === value)}
					onChange={(val) => onChange(val?.value)}
					styles={styles}
				/>
			)}
		/>
	)
}
