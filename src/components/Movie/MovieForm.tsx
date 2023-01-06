import React, { useMemo, useState } from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup';
import { useAppSelector } from '../../hooks/redux'
import { useCreateMovieMutation, useUpdateMovieMutation } from '../../store/services/movie'
import { IAddMovieForm, ICommonFormField, IDropdownData, IMovie, MovieActionEnum } from '../../types'
import GridTamplate from '../GridTamplate'
import MovieDropdownFormik from './MovieDropdownFormik'

import '../../styles/components/input.scss'
import { useUpdateMovie } from '../../hooks/useUpdateMovie';
import { useCreateMovie } from '../../hooks/useCreateMovie';

export interface IMovieFromProps {
	movie: IMovie,
	actionType: keyof typeof MovieActionEnum,
	submit: () => void
}

export default function MovieFrom({ movie, actionType, submit }: IMovieFromProps) {
	const { formFields } = useAppSelector(state => state.movie)

	const genarateFields = useMemo(() => {
		return Object.keys(formFields).reduce((acc: any, field: keyof IAddMovieForm) => {
			acc[field] = actionType === MovieActionEnum.Add ? '' : formFields[field].value
			return acc
		}, {})
	}, [actionType])

	const [formData, setFormData] = useState<IAddMovieForm>(genarateFields)

	const {updateMovie} = useUpdateMovie()
	const {createMovie} = useCreateMovie()

	const generateFormField = (field: ICommonFormField) => {
		if (field.typeField === 'dropdown') {
			const defaultValue = movie?.genres.map(value => ({ name: value, value: value }))

			return <Field
				id={field.name}
				name={field.name}
				className='dropdown'
				component={MovieDropdownFormik}
				items={field.data}
				placeholder='select a value'
				multiply={field.multiply}
				defaultValue={defaultValue}
			>
			</Field>
		}

		if (field.typeField === 'textarea') {
			return <Field
				as={field.typeField}
				rows="4"
				id={field.name}
				name={field.name}
				placeholder={field.placeholder || ''}
				className='input' />
		}

		return <Field
			type={field.typeField || 'text'}
			id={field.name}
			name={field.name}
			placeholder={field.placeholder || ''}
			className='input' />
	}
	const onSubmit = async (values: any) => {
		const newMovie: IMovie = {
			title: values.title as string,
			tagline: values.tagline as string,
			vote_average: +values.vote_average,
			vote_count: +values.vote_count,
			release_date: values.release_date as string,
			poster_path: values.poster_path as string,
			overview: values.overview as string,
			budget: +values.budget,
			revenue: +values.revenue,
			genres: (values.genres as IDropdownData[]).map(genre => genre.value),
			runtime: +values.runtime,
		}

		if (actionType === MovieActionEnum.Edit) {
			newMovie.id = movie.id as number

			try {
				const res: any = await updateMovie(newMovie)
				console.log('res:', res)

				if (!res.error) {
					console.log('res:', res.error)
				} else {
					console.log('res.error:', res.error)
				}
			} catch (error) {
				console.log('error:', error)
			}
		}
		else {
			try {
				const res: any = await createMovie(newMovie)
				console.log('res:', res)

				if (!res.error) {
					console.log('res:', res.error)
				} else {
					console.log('res.error:', res.error)
				}
			} catch (error) {
				console.log('error:', error)
			}
		}

		submit();
	}

	const validate = (values: any) => {
		const errors: any = {}

		Object.keys(values).forEach(key => {
			if (!values[key]) {
				errors[key] = 'Required'
			}

			if (Array.isArray(values[key]) && !values[key].length) {
				errors[key] = 'Required'
			}
		})

		return errors
	}

	const validationSchema = Yup.object().shape(Object.keys(formFields).reduce((acc: any, field: keyof IAddMovieForm) => {

		switch (formFields[field].typeField) {
			case 'number':
				acc[field] = Yup.number().required('Required')
				break;
			case 'date':
				acc[field] = Yup.date().required('Required')
				break;
			case 'dropdown':
				acc[field] = Yup.array().ensure().min(1)
				break;
			default:
				acc[field] = Yup.string().required('Required')
				break;
		}

		return acc
	}, {})
	)

	return (
		<Formik onSubmit={onSubmit}
			initialValues={formData}
			validationSchema={validationSchema}>
			{({ isValid, errors, handleReset }) => (
				<Form>
					<div className="add-movie-form">
						<GridTamplate columnCount={2} additionalClasses={'form-field-grid'}>
							{Object.keys(formFields).map((field: keyof IAddMovieForm) => {
								return (
									<div key={field.toString()} className={[
										'form-field',
										formFields[field].typeField === 'textarea' ? 'textarea' : ''
									].join(' ')}>
										<label className='input-label' htmlFor={field}>{formFields[field].label}</label>
										{generateFormField(formFields[field])}
										<span>{errors && errors[field] as string}</span>
									</div>
								)
							})}

						</GridTamplate>
						<div className="button_wrapper">
							<button className="button" type='reset' onClick={handleReset}>reset</button>
							<button className="button button-outline" type='submit' disabled={!isValid}>submit</button>
						</div>
					</div>

				</Form>
			)}

		</Formik>
	);
}

