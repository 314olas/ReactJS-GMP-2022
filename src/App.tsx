import React, { useState } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import Footer from './components/Footer'
import Header from './components/Header/Header'
import Filter from './components/Filter/Filter'
import MovieList from './components/Movie/MovieList'

import { TemplateProvider } from './components/context/app'

export interface IAppProps {}

export default function App(props: IAppProps) {
	return (
		<TemplateProvider>
			<Header />
			<main className='content'>
				<Filter />
				<ErrorBoundary>
					<MovieList />
				</ErrorBoundary>
			</main>
			<Footer />
		</TemplateProvider>
	)
}
