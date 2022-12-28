import React, { useMemo } from 'react'
import Movie from './Movie'
import Loading from '../Loading'
import { useAppSelector } from '../../hooks/redux'
import { useGetMovieQuery } from '../../store/services/movie'
import { useQueryParams } from '../../hooks/queryParams'

export interface IMovieListProps { }

export default function MovieList(props: IMovieListProps) {
	const { moviesActions, movieParamsQuery } = useAppSelector(state => state.movie)
	const {getAllQueryParams} = useQueryParams();

	const { data, isFetching, isError } = useGetMovieQuery({ ...movieParamsQuery, ...getAllQueryParams })

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
								/>
							)
						})}
					</section>
			}
		</>
	)
}
