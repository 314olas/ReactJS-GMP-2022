import React from 'react'
import headerImg from '../../assets/header.png'

export interface IHeaderTopProps {}

export default function HeaderTop(props: IHeaderTopProps) {
	return (
		<>
			<img
				src={headerImg}
				alt='header background'
				className='header__background'
			/>
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
					className='button header__add-btn'
				>
					+ Add movie
				</button>
			</div>
		</>
	)
}
