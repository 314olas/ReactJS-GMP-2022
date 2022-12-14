import React from 'react'
import { IDropdownData } from '../types'
import '../styles/components/input.scss'

export interface IInputProps {
	type?: React.HTMLInputTypeAttribute
	children?: React.ReactElement
	className?: string
	id?: string
	label?: string
	nameAttr: string
	onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void
	onChange: (value: string | number | IDropdownData[], name?: string) => void
	placeholder?: string
	value: string
	data?: IDropdownData[]
	multiply?: boolean
	step?: number
}

export default function Input({
	type,
	id,
	nameAttr,
	placeholder,
	className,
	value,
	label = 'label',
	data,
	step,
	multiply,
	children,
	onChange,
	onBlur = () => {}
}: IInputProps): React.ReactElement {
	const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		onChange(e.target.value, nameAttr)
	}

	const classNames = ['input', type]

	const inputAttr: Pick<IInputProps, 'id' | 'className' | 'placeholder' | 'step' | 'type'> & {
		name: string
	} = {
		id: id ? id : nameAttr,
		name: nameAttr,
		className: classNames.join(' ')
	}

	if (placeholder) {
		inputAttr.placeholder = placeholder
	}

	if (step) {
		inputAttr.step = step
	}

	if (type !== 'textarea' && type !== 'dropdown') {
		inputAttr.type = type
	}

	if (className) {
		classNames.push(className)
		inputAttr.className = classNames.join(' ')
	} else {
		inputAttr.className = classNames.join(' ')
	}

	return (
		<div className={['form-field', className].join(' ')}>
			<label
				className='input-label'
				htmlFor={nameAttr}
			>
				{label}
			</label>
			<div className='input-wrapper'>
				{type === 'textarea' && (
					<textarea
						{...inputAttr}
						value={value}
						onChange={onChangeHandler}
					></textarea>
				)}

				{type !== 'textarea' && type !== 'dropdown' && (
					<input
						{...inputAttr}
						value={value}
						onChange={onChangeHandler}
					/>
				)}
			</div>
		</div>
	)
}
