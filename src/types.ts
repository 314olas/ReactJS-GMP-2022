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
	Edit = 'Edit',
	Add = 'Add',
}

export interface IDropdownData {
	name: string
	value: string
}

export type IObjectKey = {
    [key: string]: any;
};

export interface ICommonFormField {
    typeField?: string,
    value: string | number | IDropdownData[],
    placeholder?: string,
    label?: string,
    name?: string,
    step?: number,
    multiply?: boolean,
    data?: IDropdownData[] | null
}

export interface IAddMovieForm {
    title: ICommonFormField,
    tagline: ICommonFormField,
    budget: ICommonFormField,
    genres: ICommonFormField,
    release_date: ICommonFormField,
    vote_count: ICommonFormField,
    poster_path: ICommonFormField,
    overview: ICommonFormField,
    vote_average: ICommonFormField,
    runtime: ICommonFormField,
    revenue: ICommonFormField;
};

export interface IUpdateFormField {
    name: keyof IAddMovieForm,
    value: string | number | IDropdownData[],
}

export interface IErrorResponse {
    error: {
        data?: any,
        message?: any
    }
}
