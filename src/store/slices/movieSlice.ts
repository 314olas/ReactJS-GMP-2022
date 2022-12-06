import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IDropdownData, IMovie, IObjectKey, MovieActionEnum} from '../../types'

const genresArray: IDropdownData[] = [
	{ name: 'all', value: '' },
	{ name: 'Documentary', value: 'Documentary' },
	{ name: 'Comedy', value: 'Comedy' },
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
	{ name: 'realease date', value: 'release_date' },
	{ name: 'budget', value: 'budget' },
	{ name: 'vote count', value: 'vote_count' }
]

const moviesActions: IDropdownData[] = [
	{ name: MovieActionEnum.Edit, value: MovieActionEnum.Edit },
	{ name: MovieActionEnum.Delete, value: MovieActionEnum.Delete }
]

interface IMovieSlice {
	genresArray: IDropdownData[]
	selectedGenres: IDropdownData
	sortedArray: IDropdownData[]
	selectedSort: IDropdownData
	movies: IMovie[]
	selectedMovie: IMovie | null
	moviesActions: IDropdownData[]
	selectedMovieAction: IDropdownData | null
    movieParamsQuery: IObjectKey,
}

const initialState: IMovieSlice = {
	genresArray: genresArray,
	selectedGenres: genresArray[0],
	sortedArray: sortedArray,
	selectedSort: sortedArray[0],
	movies: movies,
	selectedMovie: null,
	moviesActions: moviesActions,
	selectedMovieAction: null,
    movieParamsQuery: {'limit': '6'},
}

export const movieSlice = createSlice({
    name: 'toolkit/movie',
    initialState,
    reducers: {
        selectMovie: (state, action: PayloadAction<IMovie | null>) => {
            state.selectedMovie = action.payload
        },
        selectGenre: (state, action: PayloadAction<IDropdownData>) => {
            state.selectedGenres = action.payload
			state.movieParamsQuery['filter'] = action.payload.value
        },
        selectSortValue: (state, action: PayloadAction<IDropdownData>) => {
            state.selectedSort = action.payload
			state.movieParamsQuery['sortBy'] = action.payload.value
        },
        selectMovieActionsValue: (state, action: PayloadAction<IDropdownData>) => {
            state.selectedMovieAction = action.payload
        },
        selectMovieParamsQuery: (state, action: PayloadAction<IObjectKey>) => {
            state.movieParamsQuery[action.payload.param] = action.payload.value
        }
    },
})

export const { selectMovie, selectGenre, selectSortValue, selectMovieActionsValue, selectMovieParamsQuery } = movieSlice.actions

export default movieSlice.reducer
