import React from 'react'
import { useAppContext } from '../context/app'

import HeaderForm from './HeaderForm'
import HeaderSelectMovie from './HeaderSelectMovie'
import HeaderTop from './HeaderTop'
import headerImg from '../../assets/header.png'
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { selectMovie } from '../../store/slices/movieSlice'

export interface IHeaderProps { }

export default function Header(props: IHeaderProps) {
	const { selectedMovie } = useAppSelector(state => state.movie)
	const dispatch = useAppDispatch();

	return (
		<header className='header'>
			{selectedMovie ? (
				<>
					<HeaderSelectMovie selectedMovie={selectedMovie} unselectMovie={() => dispatch(selectMovie(null))} />
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
