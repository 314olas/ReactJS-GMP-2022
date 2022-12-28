import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routers } from './routes'
import './styles/style.scss'

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
	<React.StrictMode>
		<RouterProvider router={routers} />
	</React.StrictMode>
)
