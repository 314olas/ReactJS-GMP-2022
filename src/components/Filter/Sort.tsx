import React, { useContext } from 'react'
import DropDown from '../Dropdown'

import { GlobalContext } from '../context/app'

export const Sort = () => {
	const { sortedArray } = useContext(GlobalContext)

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
