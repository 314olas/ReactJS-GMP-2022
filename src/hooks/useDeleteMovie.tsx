import { useDeleteMovieMutation } from '../store/services/movie';

export const useDeleteMovie = () => {
	const [deleteMovie, { isSuccess }] = useDeleteMovieMutation()

	return { deleteMovie, isSuccess }
}
