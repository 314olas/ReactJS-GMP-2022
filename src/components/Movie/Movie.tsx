import React, { useState, useCallback, lazy, Suspense } from 'react'
import { IMovie, IDropdownData, MovieActionEnum } from '../../types'

import DropDown from '../Dropdown'
import GridTamplate from '../GridTamplate'
import Input from '../Input'
import Loading from '../Loading'
import MovieImage from './MovieImage'

const Modal = lazy(() => import('../Modal'))

export interface IMovieProps {
	movie: IMovie
	moviesActions: IDropdownData[],
	genresArray: IDropdownData[],
	selectedGenres: IDropdownData
	selectMovieHandler: (movie: IMovie) => void
}

export default function Movie({ movie, moviesActions = [], genresArray, selectedGenres, selectMovieHandler }: IMovieProps) {
	// const { genresArray } = useContext(GlobalContext)
	const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false)
	const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false)

	const clickHandler = (e: React.MouseEvent<HTMLButtonElement>, movie: IMovie) => {
		e.preventDefault();
		selectMovieHandler(movie)
	}

	const openModalHandler = useCallback(
		(value: IDropdownData[]) => {
			value[0].value === MovieActionEnum.Edit
				? setIsOpenEditModal(true)
				: setIsOpenDeleteModal(true)
		},
		[isOpenEditModal, isOpenDeleteModal]
	)

	return (
		<>
			<article className='movie-card'>
				<div className='image-wrapper'>
					<button type='button' onClick={(e) => clickHandler(e, movie)}>
						<MovieImage
							imgUrl={movie.poster_path}
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
									defaultValue={[selectedGenres]}
									multiply={true}
									hideValuesContent={false}
									onChangeHandler={function (value: IDropdownData[]): void {
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
