import { useCreateMovieMutation } from '../store/services/movie';

export const useCreateMovie = () => {
	const [createMovie] = useCreateMovieMutation()

	return { createMovie }
}
