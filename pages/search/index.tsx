import ErrorBoundary from '../../components/ErrorBoundary'
import Filter from '../../components/Filter/Filter'
import MovieList from '../../components/Movie/MovieList'
import Head from 'next/head'

export default function SearchPage() {
    return (
        <>
            <Head>
                <title>Search Movies</title>
                <meta name="description" content="Search movies by categories and genres" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Filter />
            <ErrorBoundary>
                <MovieList />
            </ErrorBoundary>
        </>
    )
}