import { useUpdateMovieMutation } from '../store/services/movie';

export const useUpdateMovie = () => {
	const [updateMovie] = useUpdateMovieMutation()

	return { updateMovie }
}
