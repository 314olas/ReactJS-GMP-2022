import React, {
	Dispatch,
	SetStateAction,
	useMemo,
	useState,
	createContext,
	useContext
} from 'react'
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

const categoryList: IDropdownData[] = [
	{ name: 'all', value: 'all' },
	{ name: 'Documentary', value: 'Documentary' },
	{ name: 'Comedy', value: 'Comedy' },
	{ name: 'Horror', value: 'Horror' },
	{ name: 'Drama', value: 'Drama' }
]

export interface IGlobalState {
	genresArray: IDropdownData[]
	sortedArray: IDropdownData[]
	categoryList: IDropdownData[]
	movies: IMovie[]
	moviesActions: IDropdownData[]
	selectedMovie: IMovie | null
	setAppState: Dispatch<SetStateAction<IGlobalState>>
}

const initislState: IGlobalState = {
	genresArray: genresArray,
	sortedArray: sortedArray,
	categoryList: categoryList,
	movies: movies,
	moviesActions: moviesActions,
	selectedMovie: null,
	setAppState: (prevState: SetStateAction<IGlobalState>) => prevState
}

const GlobalContext = createContext<IGlobalState>(initislState)

interface TemplateProviderProps {
	children: React.ReactNode
}

function TemplateProvider({ children }: TemplateProviderProps): JSX.Element {
	const [appSstate, setAppState] = useState<IGlobalState>(initislState)

	const state = useMemo(() => ({ ...appSstate, setAppState }), [appSstate, setAppState])

	return <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
}

const TemplateConsumer = GlobalContext.Consumer

const useAppContext = () => useContext(GlobalContext)

export { TemplateProvider, TemplateConsumer, useAppContext }
