import React from 'react'
import Movie from './Movie'
import Loading from '../Loading';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useGetMovieQuery } from '../../store/services/movie';
import { selectMovie } from '../../store/slices/movieSlice';
import { IMovie } from '../../types';

export interface IMovieListProps { }

export default function MovieList(props: IMovieListProps) {
	const { moviesActions, movieParamsQuery } = useAppSelector(state => state.movie)
	const { data, isFetching, isError } = useGetMovieQuery({...movieParamsQuery})

	const dispatch = useAppDispatch()

	const selectMovieHandler = (movie: IMovie) => {
		dispatch(selectMovie(movie))
		window.scroll({
			top: 0,
			behavior: 'smooth'
		})
	}

	return (
		<>
			{
				isFetching && !isError ?
					<Loading /> :

					<section className='container container--3 movie-card-container'>
						{data?.map((movie) => {
							return (
								<Movie
									key={movie.id.toString()}
									movie={movie}
									moviesActions={moviesActions}
									selectMovieHandler={selectMovieHandler}
								/>
							)
						})}
					</section>
			}
		</>
	)
}
