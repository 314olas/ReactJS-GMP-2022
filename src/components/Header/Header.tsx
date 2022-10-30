import React from 'react'

import HeaderForm from './HeaderForm'
import HeaderTop from './HeaderTop'

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
    return (
        <header className='header'>
            <>
                <HeaderTop />
                <HeaderForm />
            </>
        </header>
    )
}
