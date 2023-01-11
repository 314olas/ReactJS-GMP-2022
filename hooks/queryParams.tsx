import { useMemo } from 'react'
import { useRouter } from 'next/router'
import type { UrlObject } from 'url'
import { IObjectKey } from '../types'
import { ParsedUrlQuery } from 'querystring'

interface IRouterObj {
	pathName?: UrlObject | string,
	query: IObjectKey<string>
}

export const useQueryParams = () => {
	const router = useRouter()

	const setQueryParam = (paramName: string, value: string) => {
		const newQueryObj = { ...router.query, [paramName]: value };
		const routerObj = {
			pathname: router.pathname,
			query: newQueryObj,
			shallow: true
		}

		router.push(routerObj)
	}

	const deleteQueryParam = (paramName: string) => {
		const { pathname, query } = router;
		delete query[paramName]
		router.replace(
			{ pathname, query: query },
			undefined,
			{ shallow: true }
		);
	}

	const getQueryParam = (paramName: string): string | string[] | undefined => {
		return router.query[paramName]
	}

	const getAllQueryParams = useMemo(() => {
		return router.query
	}, [router.query])

	return { getAllQueryParams, getQueryParam, setQueryParam, deleteQueryParam }
}
