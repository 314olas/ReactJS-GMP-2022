import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IObjectKey } from '../types';

export const useQueryParams = () => {
	const [queryParams, setQueryParams] = useSearchParams();

	const setQueryParam = (paramName: string, value: string) => {
		queryParams.set(paramName, value)
		setQueryParams(queryParams)
	}

	const deleteQueryParam = (param: string) => {
		queryParams.delete(param)
		setQueryParams(queryParams)
	}

	const getQueryParam = (paramName: string): string => {
		return queryParams.get(paramName)
	}

	const getAllQueryParams = useMemo(() => {
		const params: IObjectKey = {}
		queryParams.forEach((value, key) => {
			params[key] = value;
		});
		return params
	}, [queryParams])

	return { queryParams, getAllQueryParams, getQueryParam, setQueryParam, deleteQueryParam }
}
