import React from 'react'
import { IDropdownData } from '../../types'

export interface ICategoriesProps {
	list: IDropdownData[]
	activeCategory: string
}

export default function Categories({ list, activeCategory }: ICategoriesProps) {
	return (
		<ul className='filter__category-list'>
			{list.map((category) => {
				return (
					<li
						className={['item', category.value === activeCategory ? 'active' : ''].join(
							' '
						)}
						key={category.name}
					>
						<a
							href='/'
							className='link'
						>
							{category.name}
						</a>
					</li>
				)
			})}
		</ul>
	)
}
