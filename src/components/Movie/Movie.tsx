import React, { useState, lazy, Suspense } from 'react'
import { useAppDispatch } from '../../hooks/redux'
import { useDeleteMovieMutation } from '../../store/services/movie'
import { updateFormField } from '../../store/slices/movieSlice'
import { IMovie, IDropdownData, MovieActionEnum } from '../../types'

import DropDown from '../Dropdown'
import Loading from '../Loading'
import MovieImage from './MovieImage'
import { useQueryParams } from '../../hooks/queryParams';

const MovieFormModal = lazy(() => import('./MovieFormModal'))
const Modal = lazy(() => import('../Modal'))

export interface IMovieProps {
	movie: IMovie
	moviesActions: IDropdownData[]
}

export default function Movie({ movie, moviesActions = [] }: IMovieProps) {
	const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false)
	const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false)
	const { setQueryParam } = useQueryParams()

	const [deleteMovie, { isSuccess }] = useDeleteMovieMutation()

	const dispatch = useAppDispatch()

	const clickHandler = (e: React.MouseEvent<HTMLButtonElement>, movie: IMovie) => {
		e.preventDefault();
		setQueryParam('movieID', movie.id.toString())
	}

	const openModalHandler =
		(value: IDropdownData[]) => {
			if (value[0].value === MovieActionEnum.Edit) {
				dispatch(updateFormField(movie))
				setIsOpenEditModal(true)
			} else {
				setIsOpenDeleteModal(true)
			}
		}

	const confirmDeleteMovie = async () => {
		try {
			const res = await deleteMovie(Number(movie.id))

		} catch (error) {
			console.log('error:', error)
		} finally {
			setIsOpenDeleteModal(false)
		}
	}

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
				<MovieFormModal
					isOpen={isOpenEditModal}
					movieAction={MovieActionEnum.Edit}
					movie={movie}
					toggleOpen={(state: boolean) => setIsOpenEditModal(state)}
				/>

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
								onClick={confirmDeleteMovie}
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
