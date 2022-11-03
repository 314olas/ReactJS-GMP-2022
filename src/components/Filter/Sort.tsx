import React from 'react'
import Triangle from '../Icons/Triangle'

interface ISortProps {}

export const Sort: React.FC<ISortProps> = () => {
    return (
        <div className='filter__sort'>
            <span className='filter__sort-text'>Sort by</span>
            <span className='dropdown'>
                <span className='dropdown__text'>release date</span>
                <Triangle className='dropdown__arrow' />
            </span>
        </div>
    )
}
