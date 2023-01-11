import Image from 'next/image'
import React from 'react'
import img from '../../public/no-image.png'

export interface IMovieImageProps {
	imgUrl?: string
	alt?: string
}

export default function MovieImage({ imgUrl, alt }: IMovieImageProps) {
	return (
		<Image
			src={imgUrl || img}
			alt={alt || 'image alt'}
			width={300}
			height={300}
		/>
	)
}
