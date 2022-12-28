import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import App from '../App'
import ErrorPage from '../components/Error'

export const routers = createBrowserRouter([
	{
		path: '/',
		element: <Navigate to="/search" />,
	},
	{
		path: '/search',
		element: <App />,
	},
	{
		path: '/search/:searchQuery',
		element: <App />,
	},
	{
		path: '*',
		element: <ErrorPage />
	}
],
	{
		basename: '/'
	}
)
