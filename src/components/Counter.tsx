import React, { useState } from 'react';

export interface ICounterProps {
}

export default function Counter(props: ICounterProps) {
    const [counter, setCounter] = useState<number>(0)

    return (
        <div style={{display: 'flex', gap: '6px'}}>
            <button type='button' onClick={() => setCounter(prev => prev - 1)}>Decrease counter</button>
            {counter}
            <button type='button' onClick={() => setCounter(prev => prev + 1)}>Increase counter</button>
        </div>
    );
}
