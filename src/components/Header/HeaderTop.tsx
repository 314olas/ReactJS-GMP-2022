import React, { useState } from 'react'
import { MovieActionEnum } from '../../types'
import MovieFormModal from '../Movie/MovieFormModal'

export interface IHeaderTopProps { }

export default function HeaderTop(props: IHeaderTopProps) {
	const [isOpenAddModal, setIsOpenAddModal] = useState<boolean>(false)

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
					onClick={() => setIsOpenAddModal(true)}
				>
					+ Add movie
				</button>
			</div>
			<MovieFormModal
				isOpen={isOpenAddModal}
				movieAction={MovieActionEnum.Add}
				toggleOpen={(state: boolean) => setIsOpenAddModal(state)}
			/>
		</>
	)
}
