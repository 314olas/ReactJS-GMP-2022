import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMovie, IMoviesResponse } from '../../types';

export const movieApi = createApi({
	reducerPath: 'movieApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:4000/'
	}),
	tagTypes: ['Movies'],
	endpoints: (builder) => ({
		getMovie: builder.query<IMovie[], object>({
			query: (arg?: object) => ({
				url: 'movies',
				method: 'GET',
				params: arg
			}),
			transformResponse: (response: IMoviesResponse) => response.data,
			providesTags: result => ['Movies']
		})
	})
})

export const { useGetMovieQuery } = movieApi
