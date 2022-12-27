import React from 'react';
import Modal from '../Modal';
import MovieFrom from './MovieForm';
import { IMovie, MovieActionEnum } from '../../types';

export interface IMovieFormModalProps {
	isOpen: boolean,
	movie?: IMovie,
	movieAction: keyof typeof MovieActionEnum
	toggleOpen: (state: boolean) => void
}

export default function MovieFormModal({ isOpen, movie = null, movieAction, toggleOpen }: IMovieFormModalProps) {

	return (
		<Modal
			isOpen={isOpen}
			toggleOpen={toggleOpen}
			additionalClass={''}
			portalId={'modal'}
		>
			<MovieFrom movie={movie} actionType={movieAction} submit={() => toggleOpen(false)} />

		</Modal>
	);
}

