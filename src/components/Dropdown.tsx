import React, { useMemo, useState } from 'react'
import '../styles/components/dropdown.scss'
import { IDropdownData } from '../types'
import ClickOutside from './ClickOutside'

export interface IDropDownProps {
	items: IDropdownData[]
	defaultValue?: IDropdownData[]
	placeholder?: string
	className?: string | string[]
	position?: string
	children?: React.ReactElement
	name?: string
	multiply?: boolean
	hideValuesContent?: boolean
	onChangeHandler: (value: IDropdownData[]) => void
}

const DropDown: React.FC<IDropDownProps> = ({
	items,
	defaultValue = [],
	placeholder = 'select options',
	children,
	className,
	position,
	name,
	multiply = false,
	hideValuesContent = true,
	onChangeHandler
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [values, setValues] = useState<IDropdownData[]>(
		defaultValue.length ? defaultValue : []
	)

	const clickHandler = (
		e: React.MouseEvent<HTMLButtonElement> | React.ChangeEvent<HTMLInputElement>,
		item: IDropdownData
	) => {
		e.stopPropagation()

		if (multiply) {
			const isExistValue = values?.filter((value) => value.value === item.value)
			const newValues: IDropdownData[] = isExistValue.length
				? values.filter((value) => value.value !== item.value)
				: [...values, item]

			setValues(() => {
				onChangeHandler(newValues)
				return newValues
			})
		} else {
			setValues(() => [item])
			onChangeHandler([item])
			toggleIsOpen(false)
		}
	}

	const toggleIsOpen = (value?: boolean): void => {
		if (value === undefined) {
			setIsOpen(false)
		} else {
			setIsOpen(value)
		}
	}

	const generateChoosenValues = useMemo(() => {

		if (values.length) {
			return <span className='values-content'>{values.map((value) => value.name + ' ')}</span>
		}

		return placeholder
	}, [values, placeholder])

	return (
		<ClickOutside
			onClickOutside={() => {
				toggleIsOpen(false)
			}}
		>
			<div className={['dropdown', isOpen ? 'open' : '', className].join(' ')}>
				<div className='dropdown__content'>
					<button
						className='button dropdown__btn'
						type='button'
						id='dropdownMenuButton1'
						aria-expanded={isOpen}
						onClick={() => toggleIsOpen(!isOpen)}
					>
						{!hideValuesContent ? generateChoosenValues : ''}
						{children || (
							<svg
								className='dropdown__arrow'
								width='10'
								height='7'
								viewBox='0 0 10 7'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M1.17339 0C0.319169 0 -0.141788 1.00184 0.413939 1.65057L4.23746 6.11398C4.63642 6.57971 5.35674 6.57992 5.75597 6.11442L9.58401 1.65101C10.1403 1.0024 9.67943 0 8.82494 0H1.17339Z'
								/>
							</svg>
						)}
					</button>
				</div>

				<ul
					className={['dropdown__menu', position].join(' ')}
					aria-labelledby='dropdownMenuButton1'
				>
					{multiply &&
						items.map((item: IDropdownData) => {
							return (
								<li key={item.name}>
									<span className='dropdown__item'>
										<input
											type='checkbox'
											id={item.name}
											onChange={(e) => clickHandler(e, item)}
											checked={!!values.find(value => value.value === item.value)}
											aria-label="dropdown item input"
										/>
										<label htmlFor={item.name} >{item.name}</label>
									</span>
								</li>
							)
						})}

					{!multiply &&
						items.map((item: IDropdownData) => {
							return (
								<li key={item.name}>
									<button
										type="button"
										className='dropdown__menu-button'
										onClick={(e) => clickHandler(e, item)}
									>
										{item.name}
									</button>
								</li>
							)
						})}
				</ul>
			</div>
		</ClickOutside>
	)
}

export default React.memo(DropDown)
