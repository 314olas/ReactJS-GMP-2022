export interface IMovie {
	id?: number
	title: string
	tagline: string
	vote_average: number
	vote_count: number
	release_date: string
	poster_path: string
	overview: string
	budget: number
	revenue: number
	genres: string[]
	runtime: number
}

export interface IMoviesResponse {
	totalAmount: number;
    data: IMovie[];
    offset: number;
    limit: number;
}

export enum MovieActionEnum {
	Delete = 'Delete',
	Edit = 'Edit'
}

export interface IDropdownData {
	name: string
	value: string
}

export type IObjectKey = {
    [key: string]: any;
};
