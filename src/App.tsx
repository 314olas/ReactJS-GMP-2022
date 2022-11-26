import React, { useState } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import Footer from './components/Footer'
import Header from './components/Header/Header'
import Filter from './components/Filter/Filter'
import MovieList from './components/Movie/MovieList'

import { IDropdownData } from './types'
import { GlobalContext, initislState } from './components/context/app'

const categoryList: IDropdownData[] = [
	{ name: 'all', value: 'all' },
	{ name: 'Documentary', value: 'Documentary' },
	{ name: 'Comedy', value: 'Comedy' },
	{ name: 'Horror', value: 'Horror' },
	{ name: 'Drama', value: 'Drama' }
]

export interface IAppProps {}

export default function App(props: IAppProps) {
	const [categories] = useState<IDropdownData[]>(categoryList)

	return (
		<GlobalContext.Provider value={initislState}>
			<Header />
			<main className='content'>
				<Filter categories={categories} />
				<ErrorBoundary>
					<MovieList />
				</ErrorBoundary>
			</main>
			<Footer />
		</GlobalContext.Provider>
	)
}
