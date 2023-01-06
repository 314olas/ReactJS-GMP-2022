import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { fireEvent, render, RenderResult } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { moviesListData } from './moks/movies'

import { store } from '../src/store'
import App from '../src/App'
import HeaderForm from '../src/components/Header/HeaderForm';
import userEvent from '@testing-library/user-event'

jest.mock('../src/hooks/useGetMovies', () => ({
	useGetMovies: jest.fn(() => {
		return {
			movies: moviesListData
		}
	})
}));

const renderApp = (): RenderResult =>
	render(
		<Provider store={store}>
			<MemoryRouter>
				<App />
			</MemoryRouter>
		</Provider>
	)

let container: HTMLElement;
let modalContainer: HTMLElement;

describe('App page', () => {
	let tree: RenderResult;
	const submitMockFunction = jest.fn()
	container = document.createElement('div');
	container.id = 'app';
	modalContainer = document.createElement('div');
	modalContainer.id = 'modal';
	document.body.appendChild(container);
	document.body.appendChild(modalContainer);

	beforeEach(() => {
		global.window = window
		window.scroll = jest.fn()
		window.HTMLElement.prototype.scrollIntoView = jest.fn()
	});

	it('check App snapshot', async () => {
		await act(() => {
			tree = renderApp()
		})
		expect(tree.asFragment()).toMatchSnapshot()
	})

	it('HeaderForm onSubmitForm function was called', async () => {
		submitMockFunction.mockImplementation((e, value) => {

		})
		const { getByPlaceholderText, findByTestId } = render(<HeaderForm onSubmitForm={submitMockFunction} />)
		const searchInput = await getByPlaceholderText('What do you want to watch?') as HTMLInputElement
		const searchBtn = await findByTestId('searchBtn') as HTMLButtonElement

		await userEvent.click(searchInput)
		fireEvent.change(searchInput, { target: { value: 'Name for movie' } })
		await userEvent.click(searchBtn)
		expect(submitMockFunction).toHaveBeenCalledTimes(1)
	})
})

