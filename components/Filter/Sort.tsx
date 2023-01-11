import DropDown from '../Dropdown'
import { IDropdownData } from '../../types';

export interface ISortProps {
	sortedArray: IDropdownData[]
	selectedSort: IDropdownData
	selectSortValue: (value: IDropdownData) => void
}

export default function Sort({ sortedArray, selectedSort, selectSortValue }: ISortProps) {


	return (
		<div className='filter__sort'>
			<span className='filter__sort-text'>Sort by</span>
			<DropDown
				items={sortedArray}
				defaultValue={[]}
				hideValuesContent={false}
				onChangeHandler={(value) => selectSortValue(value[0])}
			/>
		</div>
	);
}
