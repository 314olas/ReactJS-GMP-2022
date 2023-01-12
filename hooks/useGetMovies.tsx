import { useGetMovieQuery } from '../store/services/movie';
import { useQueryParams } from './queryParams';
import { useAppSelector } from './redux';

export const useGetMovies = () => {
	const { movieParamsQuery } = useAppSelector(state => state.movie)
	const { getAllQueryParams } = useQueryParams();
	const { data, isFetching, isError } = useGetMovieQuery({ ...movieParamsQuery, ...getAllQueryParams })

	return { movies: data, isFetching, isError }
}
