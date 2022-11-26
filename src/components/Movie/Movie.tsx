import React, { useState, useCallback, lazy, Suspense, useContext } from 'react'
import { IMovie, IDropdownData, MovieActionEnum } from '../../types'

import img from '../../assets/no-image.png'
import DropDown from '../Dropdown'
import GridTamplate from '../GridTamplate'
import Input from '../Input'
import Loading from '../Loading'
import { GlobalContext } from '../context/app'

const Modal = lazy(() => import('../Modal'))

export interface IMovieProps {
	movie: IMovie
	moviesActions: IDropdownData[]
}

export default function Movie({ movie, moviesActions = [] }: IMovieProps) {
	const { genresArray } = useContext(GlobalContext)
	const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false)
	const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false)

	const openModalHandler = useCallback(
		(value: String[]) => {
			value[0] === MovieActionEnum.Edit
				? setIsOpenEditModal(true)
				: setIsOpenDeleteModal(true)
		},
		[isOpenEditModal, isOpenDeleteModal]
	)

	return (
		<>
			<article className='movie-card'>
				<div className='image-wrapper'>
					<button type='button'>
						<img
							src={movie.poster_path || img}
							alt={movie.title}
						/>
					</button>
					<DropDown
						className={'movie-card__more'}
						position={'right'}
						items={moviesActions}
						onChangeHandler={openModalHandler}
					>
						<span>...</span>
					</DropDown>
				</div>
				<footer className='movie-card__footer'>
					<div className='text-content'>
						<h4 className='movie-name'>{movie.title}</h4>
						<span className='movie-category'>{movie.genres.join(' ')}</span>
					</div>
					<span className='year-label'>{movie.release_date}</span>
				</footer>
			</article>
			<Suspense fallback={<Loading />}>
				<Modal
					isOpen={isOpenEditModal}
					toggleOpen={(state: boolean) => setIsOpenEditModal(state)}
					additionalClass={''}
					portalId={'modal'}
				>
					<form className='add-movie-form'>
						<GridTamplate
							columnCount={2}
							additionalClasses={'form-field-grid'}
						>
							<Input
								nameAttr={'title'}
								value={'Moana'}
								label={'title'}
								onChange={() => {
									console.log('title')
								}}
							/>
							<Input
								type={'date'}
								nameAttr={'release_date'}
								value={'2006-06-29'}
								label={'RELEASE DATE'}
								placeholder={'Select Date'}
								onChange={() => {
									console.log('release_date')
								}}
							/>
							<Input
								nameAttr={'release_date'}
								value={'Moana'}
								label={'RELEASE DATE'}
								placeholder={'Select Date'}
								onChange={() => {
									console.log('title')
								}}
							/>
							<div className='form-field'>
								<span className='input-label'>genre</span>
								<DropDown
									items={genresArray}
									defaultValue={[genresArray[0]]}
									multiply={true}
									hideValuesContent={false}
									onChangeHandler={function (value: String[]): void {
										console.log(value)
									}}
								/>
							</div>
						</GridTamplate>
						<div className='button_wrapper'>
							<button
								type='button'
								className='button'
							>
								reset
							</button>
							<button
								type='button'
								className='button button-outline'
							>
								submit
							</button>
						</div>
					</form>
				</Modal>
				<Modal
					isOpen={isOpenDeleteModal}
					toggleOpen={(state: boolean) => setIsOpenDeleteModal(state)}
					additionalClass={'aprooval-modal'}
				>
					<>
						<h2 className='title'>Delete MOVIE</h2>
						<span className='text'>Are you sure you want to delete this movie?</span>
						<div className='confirmation-btn-wrapper'>
							<button
								type='button'
								className='button button-warning'
							>
								Confirm
							</button>
						</div>
					</>
				</Modal>
			</Suspense>
		</>
	)
}
