import React, { useState } from 'react'
import { store } from './store/index';
import ErrorBoundary from './components/ErrorBoundary'
import Footer from './components/Footer'
import Header from './components/Header/Header'
import Filter from './components/Filter/Filter'
import MovieList from './components/Movie/MovieList'

import { Provider } from 'react-redux';
import { useAppSelector } from './hooks/redux';

export interface IAppProps {}

export default function App(props: IAppProps) {

	return (
		<Provider store={store}>
			<Header />
			<main className='content'>
			<Filter />
				<ErrorBoundary>
					<MovieList />
				</ErrorBoundary>
			</main>
			<Footer />
		</Provider>

	)
}
