import React, { useRef } from 'react'

export type ISubmitFC = (e: React.FormEvent, value: string) => void

export interface IHeaderFormProps {
	onSubmitForm: ISubmitFC
}

export default function HeaderForm({ onSubmitForm }: IHeaderFormProps) {
	const input = useRef(null)

	return (
		<form className='header__search' onSubmit={(e) => { onSubmitForm(e, input.current.value.trim()); input.current.value = '' }}>
			<h2 className='title'>FIND YOUR MOViE</h2>
			<div className='header__search-field'>
				<input
					ref={input}
					type='text'
					className='input'
					placeholder='What do you want to watch?'
				/>
				<button data-testid="searchBtn" className='button button-warning'>search</button>
			</div>
		</form>
	)
}
