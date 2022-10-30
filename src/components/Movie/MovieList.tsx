import React from 'react'
import { IMovie } from '../../types'
import Movie from './Movie'

export interface IMovieListProps {}

const movies: IMovie[] = [
    {
        id: 1,
        title: 'TITLE',
        tagline: 'tagline',
        vote_average: 25,
        vote_count: 45,
        release_date: '06-29-2006',
        poster_path: '',
        overview: 'overview',
        budget: 5646546,
        revenue: 6565,
        runtime: 45,
        genres: ['']
    },
    {
        id: 2,
        title: 'TITLE2',
        tagline: 'tagline2',
        vote_average: 25,
        vote_count: 45,
        release_date: '06-29-2006',
        poster_path: '',
        overview: 'overview',
        budget: 5646546,
        revenue: 6565,
        runtime: 45,
        genres: ['']
    }
]

export default function MovieList(props: IMovieListProps) {
    return (
        <section className='container container--3 movie-card-container'>
            {movies.map((movie) => {
                return <Movie movie={movie} />
            })}
        </section>
    )
}
