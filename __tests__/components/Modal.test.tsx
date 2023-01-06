import { render, screen } from '@testing-library/react';
import React from 'react';
import Modal, { IModalProps } from './../../src/components/Modal';
import userEvent from '@testing-library/user-event';

const mockToggleOpen = jest.fn()

const props: IModalProps = {
	children: React.createElement('div', {}, 'test grid'),
	isOpen: true,
	toggleOpen: mockToggleOpen,
}

describe('Modal', () => {
	const container: HTMLElement = document.createElement('div');
	const modalContainer: HTMLElement = document.createElement('div');
	container.id = 'app';
	modalContainer.id = 'modal';
	document.body.appendChild(container);
	document.body.appendChild(modalContainer);

	it('close modal - close btn', async () => {
		const { getAllByLabelText } = render(<Modal {...props} />)
		const closeModalBtn = getAllByLabelText('Close')[0]

		await userEvent.click(closeModalBtn)
		expect(mockToggleOpen).toHaveBeenCalledTimes(1)
		expect(mockToggleOpen).toHaveBeenCalledWith(false)
	})

	it('close modal - backdrop btn', async () => {
		const { getAllByLabelText } = render(<Modal {...props} />)
		const closeModalBtn = getAllByLabelText('Close')[1]

		await userEvent.click(closeModalBtn)
		expect(mockToggleOpen).toHaveBeenCalledTimes(1)
		expect(mockToggleOpen).toHaveBeenCalledWith(false)
	})
	it('open modal with right position', async () => {
		props.position = 'right'
		const { getByLabelText } = render(<Modal {...props} />)
		const modal = getByLabelText('modal')

		expect(modal).toHaveClass('right')
	})
})
