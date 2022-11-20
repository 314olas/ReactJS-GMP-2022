import React from 'react'

export interface IHeaderTopProps {}

export default function HeaderTop(props: IHeaderTopProps) {
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
					className='button header__add-btn'
				>
					+ Add movie
				</button>
			</div>
		</>
	)
}
