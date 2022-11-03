import React from 'react'
import Categories from './Categories'
import { Sort } from './Sort'
import { IDropdownData } from '../../types'

import '../../styles/components/filterSection.scss'

export interface IFilterProps {
    categories: IDropdownData[]
}

export default function Filter({ categories }: IFilterProps) {
    return (
        <section className='filter'>
            <Categories list={categories} />
            <Sort />
        </section>
    )
}
