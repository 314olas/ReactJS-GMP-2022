import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'
import { IErrorResponse, IMovie, IMoviesResponse } from '../../types'

export const movieApi = createApi({
	reducerPath: 'movieApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:4000/'
	}),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath]
        }
    },

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
		}),
		updateMovie: builder.mutation<IErrorResponse | IMovie, IMovie>({
            query: (movie: IMovie) => ({
                url: 'movies',
                method: 'PUT',
                body: movie
            }),
            invalidatesTags: ['Movies']
        }),
		deleteMovie: builder.mutation<IMoviesResponse, number>({
            query: (id) => ({
                url: 'movies/' + id,
                method: 'DELETE'
            }),
            invalidatesTags: ['Movies']
        }),
		createMovie: builder.mutation<IMovie, Omit<IMovie, 'id'>>({
            query: (movie: IMovie) => ({
                url: 'movies',
                method: 'POST',
                body: movie
            }),
            invalidatesTags: ['Movies']
        }),
	}),
	refetchOnMountOrArgChange: 60,
})

export const { useGetMovieQuery, useDeleteMovieMutation, useUpdateMovieMutation, useCreateMovieMutation } = movieApi
