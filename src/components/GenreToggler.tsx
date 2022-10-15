import React, { useState } from 'react';

export interface IGenreTogglerProps {
    genres: string[]
}

export default function GenreToggler({ genres }: IGenreTogglerProps) {
    const [activeGenre, setActiveGenre] = useState<string>(genres[0])
    return (
        <ul>
            {genres.map((genre: string) => <li className={activeGenre === genre ? 'active' : ''}
                onClick={() => setActiveGenre(genre)}
                key={genre}>{genre}</li>)}
        </ul>
    );
}
