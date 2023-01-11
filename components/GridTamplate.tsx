import React from 'react'

export interface IGridTamplateProps {
	children: React.ReactElement[] | React.ReactElement
	columnCount?: number
	additionalClasses?: string
}

export default function GridTamplate({
	children,
	columnCount,
	additionalClasses
}: IGridTamplateProps) {
	return (
		<div
			className={[
				'grid-tamplate',
				columnCount ? 'grid-column-' + columnCount : '',
				additionalClasses
			].join(' ')}
		>
			{children}
		</div>
	)
}
