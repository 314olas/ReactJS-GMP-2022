import React from 'react'
import { IDropdownData } from '../../types'

export interface ICategoriesProps {
    list: IDropdownData[]
}

export default function Categories({ list }: ICategoriesProps) {
    return (
        <ul className='filter__category-list'>
            {list.map((category) => {
                return (
                    <li
                        className={['item', category.isActive ? 'active' : ''].join(' ')}
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
