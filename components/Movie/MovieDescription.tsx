import React from 'react'
import { IMovie } from '../../types'
import MovieCardImg from './MovieImage'

import styles from '../../styles/components/movieCardDescription.module.scss'

interface IMovieCardDescriptionProps {
	movie: IMovie
}

export default function MovieCardDescription({ movie }: IMovieCardDescriptionProps) {
	return (
		<div className={styles.movieCardDescription}>
			<MovieCardImg imgUrl={movie.poster_path} />
			<div className='info'>
				<div className={styles.title}>
					<h2 className={styles.titleText}>{movie.title}</h2>
					<span className={styles.rating}>{movie.vote_average}</span>
				</div>
				<p className={styles.genre}>{movie.genres.join(', ')}</p>
				<div className={styles.time}>
					<span className={styles.year}>{movie.release_date.split('-')[0]}</span>
					<span>{movie.runtime}</span>
				</div>
				<span className={styles.description}>{movie.overview}</span>
			</div>
		</div>
	)
}
