import React from 'react'

export interface IHeaderFormProps {}

export default function HeaderForm(props: IHeaderFormProps) {
    return (
        <form className='header__search'>
            <h2 className='title'>FIND YOUR MOViE</h2>
            <div className='header__search-field'>
                <input
                    type='text'
                    className='input'
                    placeholder='What do you want to watch?'
                />
                <button className='button button-warning'>search</button>
            </div>
        </form>
    )
}
