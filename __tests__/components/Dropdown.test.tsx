import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';

import DropDown from '../../src/components/Dropdown'
import { IDropDownProps } from '../../src/components/Dropdown';

import { items } from '../moks/dropDown'
import userEvent from '@testing-library/user-event';
import { IInputProps } from '../../src/components/Input';

const mockOnChangeHandler = jest.fn()

const props: IDropDownProps = {
	items: items,
	onChangeHandler: mockOnChangeHandler
}

describe('Dropdown', () => {
	it('not multiply - render with 3 dropdown items', () => {
		const { container } = render(<DropDown {...props} />)
		const dropdownItems = container.querySelectorAll('.dropdown__menu-button')
		expect(dropdownItems.length).toBe(3)
	})

	it('not multiply - choose first item( onChangeHandler function is called)', () => {
		const { container } = render(<DropDown {...props} />)
		const dropdownItem = container.querySelector('.dropdown__menu-button')
		fireEvent.click(dropdownItem)
		expect(mockOnChangeHandler).toHaveBeenCalledTimes(1)
	})

	it('not multiply - choose first item( onChangeHandler function is called with arguments)', async () => {
		const { container } = render(<DropDown {...props} />)
		const dropdownItem = container.querySelector('.dropdown__menu-button')
		await userEvent.click(dropdownItem)
		expect(mockOnChangeHandler).toHaveBeenCalledWith([items[0]])
	})

	it('multiply dropdown - choose 2 items', async () => {
		props.multiply = true
		const { getAllByLabelText } = render(<DropDown {...props} />)
		const inputs = getAllByLabelText('dropdown item input')

		await userEvent.click(inputs[0])
		await userEvent.click(inputs[1])

		expect(mockOnChangeHandler).toHaveBeenCalledTimes(2)
		expect(mockOnChangeHandler).toHaveBeenCalledWith([items[0], items[1]])
	})

	it('multiply dropdown -  choose one item twice', async () => {
		props.multiply = true
		const { getAllByLabelText } = render(<DropDown {...props} />)
		const inputs = getAllByLabelText('dropdown item input')

		await userEvent.click(inputs[0])
		await userEvent.click(inputs[1])
		await userEvent.click(inputs[1])

		expect(mockOnChangeHandler).toHaveBeenCalledTimes(3)
		expect(mockOnChangeHandler).toHaveBeenCalledWith([items[0]])
		screen.debug()
	})

	it('open dropdown', async () => {
		const { container } = render(<DropDown {...props} />)
		const openDropdownBtn = container.querySelector('.dropdown__btn')

		await userEvent.click(openDropdownBtn)

		const isOpenDropdown = container.querySelector('.dropdown.open')
		expect(isOpenDropdown).toBeTruthy()
		screen.debug()
	})

	it('close dropdown', async () => {
		const { container } = render(<DropDown {...props} />)
		const openDropdownBtn = container.querySelector('.dropdown__btn')

		await userEvent.click(openDropdownBtn)

		const outsideDiv = container.querySelector('.outside')
		await userEvent.click(outsideDiv)

		const isOpenDropdown = container.querySelector('.dropdown.open')
		expect(isOpenDropdown).toBeFalsy()
	})
})
