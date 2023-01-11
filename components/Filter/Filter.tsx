import Categories from './Categories'
import Sort from './Sort'
import { useAppSelector } from '../../hooks/redux'

import { IDropdownData } from '../../types'
import { useQueryParams } from '../../hooks/queryParams'

import styles from '../../styles/components/filterSection.module.scss'

export interface IFilterProps {
}

export default function Filter(props: IFilterProps) {
	const { sortedArray, selectedSort, genresArray } = useAppSelector(state => state.movie)
	const { setQueryParam, getQueryParam, deleteQueryParam } = useQueryParams()

	const selectCategoryHandler = (category: IDropdownData) => {
		category.value !== 'all' ? setQueryParam('filter', category.value) : deleteQueryParam('filter')
	}

	const selectSort = (value: IDropdownData) => {
		setQueryParam('sortBy', value.value)

		if (selectedSort.name === value.name) {
			return
		}
	}

	return (
		<section className={styles.filter}>
			<Categories
				list={genresArray}
				activeCategory={getQueryParam('filter')}
				selectCategory={selectCategoryHandler}
			/>
			<Sort
				sortedArray={sortedArray}
				selectedSort={selectedSort}
				selectSortValue={selectSort}
			/>
		</section>
	)
}
