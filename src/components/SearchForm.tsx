import React, {MutableRefObject, useRef} from 'react';

export interface ISearchFormProps {
}

export default function SearchForm(props: ISearchFormProps) {
    const inputRef = useRef() as MutableRefObject<HTMLInputElement>
    const searchHandler = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(inputRef.current.value);
        inputRef.current.value = ''
    }
    return (
        <form onSubmit={searchHandler}>
            <input ref={inputRef} type="text"  name='search'/>
            <button>Search</button>
        </form>
    );
}
