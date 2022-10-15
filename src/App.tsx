import React from 'react';
import Counter from './components/Counter';
import GenreToggler from './components/GenreToggler';
import ReactComponent from './components/ReactComponent';
import ReactCreateElement from './components/ReactCreateElement';
import ReactFunctionalComponent from './components/ReactFunctionalComponent';
import ReactPureComponent from './components/ReactPureComponent';
import SearchForm from './components/SearchForm';

export interface IAppProps {
}

export default function App(props: IAppProps) {
	const genres = ['Genre1', 'Genre2', 'Genre3', 'Genre4', 'Genre5']
	return (
		<div>
			hELLO wORLD
			<br />
			<ReactCreateElement />
			<br />
			<ReactComponent />
			<br />
			<ReactPureComponent />
			<br />
			<ReactFunctionalComponent />
			<br />
			<Counter />
			<br />
			<SearchForm />
			<br />
			<GenreToggler genres={genres} />
		</div>
	);
}
