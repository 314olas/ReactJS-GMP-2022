import React from 'react'

export interface ICloseProps {
	className?: string
}

export default function Close({ className }: ICloseProps) {
	return (
		<svg
			className={className}
			width='23'
			height='24'
			viewBox='0 0 23 24'
			fill='currentColor'
		>
			<path
				d='M1.47099 1.9902L21.529 22.0482'
				stroke='#fff'
				strokeWidth='2'
				strokeLinecap='round'
			/>
			<path
				d='M21.529 1.9902L1.47103 22.0482'
				stroke='#fff'
				strokeWidth='2'
				strokeLinecap='round'
			/>
		</svg>
	)
}
