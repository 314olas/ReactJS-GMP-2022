import React from 'react'
import img from '../../assets/no-image.png'

export interface IMovieImageProps {
	imgUrl?: string
	alt?: string
}

export default function MovieImage({ imgUrl, alt }: IMovieImageProps) {
	return (
		<img
			src={imgUrl || img}
			alt={alt || 'image alt'}
		/>
	)
}
