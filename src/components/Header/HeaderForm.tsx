import React, { useRef } from 'react'
import { useQueryParams } from '../../hooks/queryParams'

export interface IHeaderFormProps { }

export default function HeaderForm(props: IHeaderFormProps) {
	const { setQueryParam, deleteQueryParam } = useQueryParams()
	const input = useRef(null)

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (input.current.value.trim()) {
			setQueryParam('search', input.current.value)
			setQueryParam('searchBy', 'title')
		} else {
			deleteQueryParam('search')
			deleteQueryParam('searchBy')
		}
	}

	return (
		<form className='header__search' onSubmit={onSubmit}>
			<h2 className='title'>FIND YOUR MOViE</h2>
			<div className='header__search-field'>
				<input
					ref={input}
					type='text'
					className='input'
					placeholder='What do you want to watch?'
				/>
				<button className='button button-warning'>search</button>
			</div>
		</form>
	)
}
