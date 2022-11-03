import React from 'react'
import { IMovie } from '../../types'

import img from '../../assets/no-image.png'

export interface IMovieProps {
    movie: IMovie
}

export default function Movie({ movie }: IMovieProps) {
    return (
        <article
            className='movie-card'
            key={movie.id.toString()}
        >
            <div className='image-wrapper'>
                <a
                    href='/'
                    title={movie.title}
                >
                    <img
                        src={movie.poster_path || img}
                        alt=''
                    />
                </a>
            </div>
            <footer className='movie-card__footer'>
                <div className='text-content'>
                    <h4 className='movie-name'>{movie.title}</h4>
                    <span className='movie-category'>{movie.genres}</span>
                </div>
                <span className='year-label'>{movie.release_date}</span>
            </footer>
        </article>
    )
}
