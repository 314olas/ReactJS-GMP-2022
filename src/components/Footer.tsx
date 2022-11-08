import React from 'react'

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
	return (
		<footer className='footer'>
			<a
				href='/'
				className='header__logo'
			>
				<span className='logo-text'>
					<strong>netflix</strong>roulette
				</span>
			</a>
		</footer>
	)
}
