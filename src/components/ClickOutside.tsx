import React, { ReactNode, useEffect, useRef } from 'react'

export interface IClickOutsideProps {
	onClickOutside: (event: MouseEvent | TouchEvent) => void
	children: ReactNode
	className?: string
}

export default function ClickOutside({ onClickOutside, children, className }: IClickOutsideProps) {
	const containerRef = useRef<HTMLDivElement>()

	const handleClick = (event: MouseEvent) => {
		const container = containerRef.current

		if (
			(container && container === event.target) ||
			(container && !container.contains(event.target as Node))
		) {
			onClickOutside(event)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClick, true)

		return () => {
			document.removeEventListener('click', handleClick, true)
		}
	})

	return (
		<div
			className={className}
			ref={containerRef}
		>
			{children}
		</div>
	)
}
