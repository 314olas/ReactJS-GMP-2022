import React from 'react'
import Categories from './Categories'
import Sort from './Sort'
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { selectGenre, selectMovieParamsQuery, selectSortValue } from '../../store/slices/movieSlice';

import '../../styles/components/filterSection.scss'
import { IDropdownData } from '../../types';

export interface IFilterProps {
}

export default function Filter(props: IFilterProps) {
	const { sortedArray, selectedSort, genresArray, selectedGenres } = useAppSelector(state => state.movie)
	const dispatch = useAppDispatch()

	const selectCategoryHandler = (category: IDropdownData) => {
		dispatch(selectGenre(category))
	}

	const selectSort = (value: IDropdownData) => {
		dispatch(selectSortValue(value))
	}

	return (
		<section className='filter'>
			<Categories
				list={genresArray}
				activeCategory={selectedGenres}
				selectCategory={selectCategoryHandler}
			/>
			<Sort
				sortedArray={sortedArray}
				selectedSort={selectedSort}
				selectSortValue={selectSort}
			/>
		</section>
	)
}
