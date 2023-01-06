import React from 'react'
import { IMovie } from '../../types'
import MovieDescription from '../Movie/MovieDescription'

export interface IHeaderSelectMovieProps {
	selectedMovie: IMovie,
	unselectMovie: () => void
}

export default function HeaderSelectMovie({ selectedMovie, unselectMovie }: IHeaderSelectMovieProps) {
	return (
		<>
			<div className='header__top'>
				<a
					href='/'
					className='header__logo'
				>
					<h1 className='logo-text'>
						<strong>netflix</strong>roulette
					</h1>
				</a>
				<button
					type='button'
					className='button header__search-btn'
					title='unselect movie'
					onClick={unselectMovie}
				>
					<svg
						width='29'
						height='30'
						viewBox='0 0 29 30'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<circle
							cx='18.5'
							cy='10.5'
							r='9.5'
							stroke='#F65261'
							strokeWidth='2'
						/>
						<path
							d='M10.5 19.5L1.5 28.5'
							stroke='#F65261'
							strokeWidth='2'
							strokeLinecap='square'
						/>
					</svg>
				</button>
			</div>
			<MovieDescription movie={selectedMovie} />
		</>
	)
}
