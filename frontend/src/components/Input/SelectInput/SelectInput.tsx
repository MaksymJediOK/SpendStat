import React from 'react'
import Select, { OptionProps, StylesConfig } from 'react-select'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'

interface BaseSelectOptions {
	readonly value: string
	readonly label: string
}

interface SelectInputProps<T extends FieldValues> {
	name: Path<T>
	placeholder: string
	control: Control<T>
	options: readonly BaseSelectOptions[]
	styles?: StylesConfig<BaseSelectOptions, false>
	Options?: React.ComponentType<OptionProps<BaseSelectOptions, false>> | null
}

export const SelectInput = <T extends FieldValues>({
	name,
	placeholder,
	options,
	control,
	styles,
	Options,
}: SelectInputProps<T>) => {
	const components = Options ? { Option: Options } : undefined

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
