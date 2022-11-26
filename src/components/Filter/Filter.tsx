import React from 'react'
import { IDropdownData } from '../../types'
import Categories from './Categories'
import { Sort } from './Sort'

import '../../styles/components/filterSection.scss'

export interface IFilterProps {
	categories: IDropdownData[]
}

export default function Filter({ categories }: IFilterProps) {
	return (
		<section className='filter'>
			<Categories
				list={categories}
				activeCategory={'all'}
			/>
			<Sort />
		</section>
	)
}
