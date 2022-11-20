import React from 'react'
import img from '../../assets/no-image.png'

export interface IMovieCardImgProps {
	imgUrl?: string
	alt?: string
}

export default function MovieCardImg({ imgUrl, alt }: IMovieCardImgProps) {
	return (
		<img
			src={imgUrl || img}
			alt={alt || 'image alt'}
		/>
	)
}
