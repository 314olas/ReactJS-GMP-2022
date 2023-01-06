import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'
import { IAddMovieForm, IDropdownData, IMovie, IObjectKey, MovieActionEnum} from '../../types'

const genresArray: IDropdownData[] = [
	{ name: 'all', value: 'all' },
	{ name: 'Documentary', value: 'documentary' },
	{ name: 'Comedy', value: 'comedy' },
	{ name: 'Crime', value: 'crime' },
	{ name: 'Horror', value: 'horror' },
	{name: 'Romance', value: 'romance'},
	{name: 'Drama', value: 'drama'},
	{name: 'Action', value: 'action'},
	{name: 'Science Fiction', value: 'science fiction'},
	{name: 'Adventure', value: 'adventure'},
	{name: 'Fantasy', value: 'fantasy'}
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
		title: 'Movie 2',
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

export const initialFormValue: IAddMovieForm = {
    title: {
        label: 'Title',
        name: 'title',
        value: ''
    },
    tagline: {
        label: 'tagline',
        name: 'tagline',
        value: ''
    },
    vote_average: {
        label: 'RATING',
        typeField: 'number',
        name: 'vote_average',
        step: 0.1,
        value: ''
    },
    vote_count: {
        label: 'Amount of vote',
        typeField: 'number',
        name: 'vote_count',
        value: ''
    },
    release_date: {
        label: 'RELEASE DATE',
        typeField: 'date',
        name: 'release_date',
        value: '2017-12-29'
    },
    poster_path: {
        label: 'movie url',
        placeholder: 'https://',
        name: 'poster_path',
        value: ''
    },
    budget: {
        label: 'Budget',
        typeField: 'number',
        name: 'budget',
        value: ''
    },
    revenue: {
        label: 'revenue',
        typeField: 'number',
        name: 'revenue',
        value: ''
    },
    runtime: {
        label: 'RUNTIME',
        typeField: 'number',
        name: 'runtime',
        value: ''
    },
    genres: {
        label: 'genre',
        typeField: 'dropdown',
        data: genresArray,
        multiply: true,
        name: 'genres',
        value: [],
    },
    overview: {
        label: 'OVERVIEW',
        typeField: 'textarea',
        value: '',
        name: 'overview',
        placeholder: 'Movie description'
    }
}

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
	formFields: IAddMovieForm,
}

export const initialState: IMovieSlice = {
	genresArray: genresArray,
	selectedGenres: genresArray[0],
	sortedArray: sortedArray,
	selectedSort: sortedArray[0],
	movies: movies,
	selectedMovie: null,
	moviesActions: moviesActions,
	selectedMovieAction: null,
    movieParamsQuery: {'limit': '6'},
	formFields: initialFormValue,
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
        },
		updateFormField: (state, action: PayloadAction<IMovie>) => {
			state.formFields = {
				...state.formFields,
				title: {...state.formFields.title, value: action.payload.title},
                tagline: {...state.formFields.tagline, value: action.payload.tagline},
                budget: {...state.formFields.budget, value: action.payload.budget},
                genres: {...state.formFields.genres, value: action.payload.genres.map(item => ({name: item, value: item.toLowerCase()}) )},
                release_date: {...state.formFields.release_date, value: action.payload.release_date},
                vote_count: {...state.formFields.vote_count, value: action.payload.vote_count},
                poster_path: {...state.formFields.poster_path, value: action.payload.poster_path},
                overview: {...state.formFields.overview, value: action.payload.overview},
                vote_average: {...state.formFields.vote_average, value: action.payload.vote_average},
                runtime: {...state.formFields.runtime, value: action.payload.runtime},
                revenue: {...state.formFields.revenue, value: action.payload.revenue}
			}
        },
    },
})

export const { selectMovie, selectGenre, selectSortValue, selectMovieActionsValue, selectMovieParamsQuery, updateFormField } = movieSlice.actions

export const selectMoviesActions = (state: RootState) => state.movie.moviesActions

export default movieSlice.reducer
