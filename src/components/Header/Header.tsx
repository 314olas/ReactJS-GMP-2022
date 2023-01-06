import React, { useLayoutEffect, useMemo } from 'react'

import HeaderForm from './HeaderForm'
import HeaderSelectMovie from './HeaderSelectMovie'
import HeaderTop from './HeaderTop'
import headerImg from '../../assets/header.png'
import { useAppSelector } from '../../hooks/redux'
import { useGetMovieQuery } from '../../store/services/movie'
import { useQueryParams } from '../../hooks/queryParams'

export interface IHeaderProps { }

export default function Header(props: IHeaderProps) {
	const { movieParamsQuery } = useAppSelector(state => state.movie)
	const { data } = useGetMovieQuery({ ...movieParamsQuery })
	const { getQueryParam, deleteQueryParam } = useQueryParams()

	useLayoutEffect(() => {
		window.scroll({
			top: 0,
			behavior: 'smooth'
		})
	}, [getQueryParam('movieID')])

	const unSelectMovie = () => {
		deleteQueryParam('movieID')
	}

	const selectedMovie = useMemo(() => {
		return data?.find(movie => +movie.id === +getQueryParam('movieID'))
	}, [data, getQueryParam])

	return (
		<header className='header'>
			{selectedMovie ? (
				<>
					<HeaderSelectMovie
						selectedMovie={selectedMovie}
						unselectMovie={unSelectMovie}
					/>
				</>
			) : (
				<>
					<img
						src={headerImg}
						alt='header background'
						className='header__background'
					/>
					<div className='position-relative'>
						<HeaderTop />
						<HeaderForm />
					</div>
				</>
			)}
		</header>
	)
}
