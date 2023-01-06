import { render } from '@testing-library/react'
import React from 'react'
import GridTamplate, { IGridTamplateProps } from '../../src/components/GridTamplate'

const props: IGridTamplateProps = {
	children: React.createElement('div', {}, 'test grid'),
}

describe('GridTamplate', () => {
	it('check child text', () => {
		props.columnCount = 1
		const { getByText } = render(<GridTamplate {...props} />)
		const elem = getByText('test grid')
		expect(elem).toBeInTheDocument()
	})

	it('check correct class for amount of column', () => {
		props.columnCount = 2
		const { container } = render(<GridTamplate {...props} />)
		const elem = container.querySelectorAll('.grid-column-2')
		expect(elem.length).toBe(1)
	})

	it('check correct default column class', () => {
		const { container } = render(<GridTamplate {...props} />)
		const elem = container.querySelector('.grid-tamplate')
		expect(elem.classList.contains('grid-column')).toBeFalsy()
	})

})
