import React, { useLayoutEffect, useMemo } from 'react'

import HeaderForm, { ISubmitFC } from './HeaderForm'
import HeaderSelectMovie from './HeaderSelectMovie'
import HeaderTop from './HeaderTop'
import headerImg from '../../assets/header.png'
import { useQueryParams } from '../../hooks/queryParams'
import { useGetMovies } from '../../hooks/useGetMovies'

export interface IHeaderProps { }

export default function Header(props: IHeaderProps) {
	const { movies } = useGetMovies()
	const { getQueryParam, deleteQueryParam, setQueryParam } = useQueryParams()

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
		return movies?.find(movie => +movie.id === +getQueryParam('movieID'))
	}, [movies, getQueryParam])

	const submitSearchForm: ISubmitFC = (e: React.FormEvent, value: string) => {
		e.preventDefault()
		if (value) {
			setQueryParam('search', value)
			setQueryParam('searchBy', 'title')
		} else {
			deleteQueryParam('search')
			deleteQueryParam('searchBy')
		}
	}

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
						<HeaderForm onSubmitForm={submitSearchForm} />
					</div>
				</>
			)}
		</header>
	)
}
