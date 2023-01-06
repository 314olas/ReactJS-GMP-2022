import React, { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import { AnyAction, configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { RootState } from '../../src/store'

import movieReducer from '../../src/store/slices/movieSlice'
import { movieApi } from '../../src/store/services/movie'

// import type { AppStore, RootState } from '../app/store'
// As a basic setup, import your same slice reducers
// import userReducer from '../features/users/userSlice'

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
	preloadedState?: PreloadedState<RootState>
	store?: any
}

export function renderWithProviders(
	ui: React.ReactElement,
	{
		store = configureStore(
			{
				reducer: { movie: movieReducer, [movieApi.reducerPath]: movieApi.reducer, },
				middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware)
			}
		),
		...renderOptions
	}: ExtendedRenderOptions = {}
) {
	function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
		return <Provider store={store}>{children}</Provider>
	}

	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

