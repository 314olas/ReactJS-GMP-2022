import React from 'react'
import { IDropdownData } from '../../types'

export interface ICategoriesProps {
	list: IDropdownData[]
	activeCategory: string,
	selectCategory: (category: IDropdownData) => void
}

export default function Categories({ list, activeCategory, selectCategory }: ICategoriesProps) {

	const clickHandler = (e: React.MouseEvent<HTMLAnchorElement>, category: IDropdownData) => {
		e.preventDefault()
		selectCategory(category)
	}

	return (
		<ul className='filter__category-list'>
			{list.map((category) => {
				return (
					<li
						className={[
							'item',
							category.value === activeCategory ? 'active' : '',
							category.value === 'all' && !activeCategory ? 'active' : ''
						].join(
							' '
						)}
						key={category.name}
					>
						<a
							href='/'
							className='link'
							onClick={(e) => clickHandler(e, category)}
						>
							{category.name}
						</a>
					</li>
				)
			})}
		</ul>
	)
}
