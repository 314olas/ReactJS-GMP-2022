import React from 'react'
import Movie from './Movie'
import Loading from '../Loading'
import { useAppSelector } from '../../hooks/redux'
import { useGetMovies } from '../../hooks/useGetMovies'
import { selectMoviesActions } from '../../store/slices/movieSlice'

export interface IMovieListProps { }

export default function MovieList(props: IMovieListProps) {
	const moviesActions = useAppSelector(selectMoviesActions)

	const { movies, isFetching, isError } = useGetMovies()

	return (
		<>
			{
				isFetching && !isError ?
					<Loading /> :

					<section className='container container--3 movie-card-container'>
						{movies?.map((movie) => {
							return (
								<Movie
									key={movie.id.toString()}
									movie={movie}
									moviesActions={moviesActions}
								/>
							)
						})}
					</section>
			}
		</>
	)
}
