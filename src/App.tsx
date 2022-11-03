import React, { useState } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import Footer from './components/Footer'
import Header from './components/Header/Header'
import Filter from './components/Filter/Filter'

import { IDropdownData } from './types'
import MovieList from './components/Movie/MovieList'

const categoryList: IDropdownData[] = [
    { name: 'all', isActive: true },
    { name: 'Documentary', isActive: false },
    { name: 'Comedy', isActive: false },
    { name: 'Horror', isActive: false },
    { name: 'Drama', isActive: false }
]

export interface IAppProps {}

export default function App(props: IAppProps) {
    const [categories, setCategories] = useState<IDropdownData[]>(categoryList)

    return (
        <>
            <Header />
            <main className='content'>
                <Filter categories={categories} />
                <ErrorBoundary>
                    <MovieList />
                </ErrorBoundary>
            </main>
            <Footer />
            App ppp
        </>
    )
}
