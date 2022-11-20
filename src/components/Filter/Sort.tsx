import React, { useContext } from 'react'
import { useAppContext } from '../context/app'
import DropDown from '../Dropdown'

export const Sort = () => {
	const { sortedArray } = useAppContext()

	return (
		<div className='filter__sort'>
			<span className='filter__sort-text'>Sort by</span>
			<DropDown
				items={sortedArray}
				defaultValue={[sortedArray[0]]}
				hideValuesContent={false}
				onChangeHandler={(value) => {
					console.log(value)
				}}
			/>
		</div>
	)
}
