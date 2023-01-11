import Link from 'next/link'

export default function Footer() {
	return (
		<footer className='footer'>
			<Link href='/' legacyBehavior>
				<a className='header__logo'>
					<span className='logo-text'>
						<strong>netflix</strong>roulette
					</span>
				</a>
			</Link>
		</footer>
	)
}
