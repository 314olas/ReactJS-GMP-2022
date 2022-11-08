import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/app'
import Movie from './Movie'

export interface IMovieListProps {}

export default function MovieList(props: IMovieListProps) {
	const { movies, moviesActions } = useContext(GlobalContext)

	return (
		<section className='container container--3 movie-card-container'>
			{movies.map((movie) => {
				return (
					<Movie
						key={movie.id.toString()}
						movie={movie}
						moviesActions={moviesActions}
					/>
				)
			})}
		</section>
	)
}
