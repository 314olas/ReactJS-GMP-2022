import React from 'react'
import Categories from './Categories'
import { Sort } from './Sort'

import '../../styles/components/filterSection.scss'
import { useAppContext } from '../context/app'

export interface IFilterProps {}

export default function Filter(props: IFilterProps) {
	const { categoryList } = useAppContext()
	return (
		<section className='filter'>
			<Categories
				list={categoryList}
				activeCategory={'all'}
			/>
			<Sort />
		</section>
	)
}
