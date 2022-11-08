import React from 'react'
import { IDropdownData, IMovie, MovieActionEnum } from '../../types'

const genresArray: IDropdownData[] = [
	{ name: 'Documentary', value: 'Documentary' },
	{ name: 'Crime', value: 'Crime' },
	{ name: 'Horror', value: 'Horror' }
]

const movies: IMovie[] = [
	{
		id: 1,
		title: 'TITLE',
		tagline: 'tagline',
		vote_average: 25,
		vote_count: 45,
		release_date: '06-29-2006',
		poster_path: '',
		overview: 'overview',
		budget: 5646546,
		revenue: 6565,
		runtime: 45,
		genres: ['']
	},
	{
		id: 2,
		title: 'TITLE2',
		tagline: 'tagline2',
		vote_average: 25,
		vote_count: 45,
		release_date: '06-29-2006',
		poster_path: '',
		overview: 'overview',
		budget: 5646546,
		revenue: 6565,
		runtime: 45,
		genres: ['Drama', 'Biography', 'Music']
	}
]

const sortedArray: IDropdownData[] = [
	{ name: 'realease date', value: 'realease_date' },
	{ name: 'ganre', value: 'ganre' },
	{ name: 'votes', value: 'votes' }
]

const moviesActions: IDropdownData[] = [
	{ name: MovieActionEnum.Edit, value: MovieActionEnum.Edit },
	{ name: MovieActionEnum.Delete, value: MovieActionEnum.Delete }
]

export interface IGlobalState {
	genresArray: IDropdownData[]
	sortedArray: IDropdownData[]
	movies: IMovie[]
	moviesActions: IDropdownData[]
}

export const initislState: IGlobalState = {
	genresArray: genresArray,
	sortedArray: sortedArray,
	movies: movies,
	moviesActions: moviesActions
}

export const GlobalContext = React.createContext<IGlobalState>(initislState)
