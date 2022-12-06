import React from 'react'
import { useAppContext } from '../context/app'

import HeaderForm from './HeaderForm'
import HeaderSelectMovie from './HeaderSelectMovie'
import HeaderTop from './HeaderTop'
import headerImg from '../../assets/header.png'

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
	const { selectedMovie } = useAppContext()

	return (
		<header className='header'>
			{selectedMovie ? (
				<>
					<HeaderSelectMovie selectedMovie={selectedMovie} />
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
