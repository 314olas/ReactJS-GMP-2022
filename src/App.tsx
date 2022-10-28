import React from 'react'
import noImg from './assets/no-image.png'

export interface IAppProps {}

export default function App(props: IAppProps) {
    return (
        <div>
            <img src={noImg} alt='' />
            App ppp
        </div>
    )
}
