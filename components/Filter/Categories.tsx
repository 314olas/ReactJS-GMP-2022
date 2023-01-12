import { IDropdownData } from '../../types'

import styles from '../../styles/components/filterSection.module.scss'

export interface ICategoriesProps {
	list: IDropdownData[]
	activeCategory: string | string[] | undefined,
	selectCategory: (category: IDropdownData) => void
}

export default function Categories({ list, activeCategory = '', selectCategory }: ICategoriesProps) {

	const clickHandler = (e: React.MouseEvent<HTMLButtonElement>, category: IDropdownData) => {
		e.preventDefault()
		selectCategory(category)
	}

	return (
		<ul className={styles.categoryList}>
			{list.map((category) => {
				return (
					<li
						className={[
							styles.item,
							category.value === activeCategory ? styles.active : '',
							category.value === 'all' && !activeCategory ? styles.active : ''
						].join(
							' '
						)}
						key={category.name}
					>
						<button
							type='button'
							onClick={(e) => clickHandler(e, category)}
						>
							{category.name}
						</button>
					</li>
				)
			})}
		</ul>
	)
}
