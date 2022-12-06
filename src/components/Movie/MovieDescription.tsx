import React from 'react'
import { IMovie } from '../../types'
import MovieCardImg from './MovieImage'

import '../../styles/components/movieCardDescription.scss'

interface IMovieCardDescriptionProps {
	movie: IMovie
}

export default function MovieCardDescription({ movie }: IMovieCardDescriptionProps) {
	return (
		<div className='movie-card-description'>
			<MovieCardImg imgUrl={movie.poster_path} />
			<div className='info'>
				<div className='title'>
					<h2 className='title__text'>{movie.title}</h2>
					<span className='rating'>{movie.vote_average}</span>
				</div>
				<p className='genre'>{movie.genres.join(', ')}</p>
				<div className='time'>
					<span className='year'>{movie.release_date.split('-')[0]}</span>
					<span>{movie.runtime}</span>
				</div>
				<span className='description'>{movie.overview}</span>
			</div>
		</div>
	)
}
