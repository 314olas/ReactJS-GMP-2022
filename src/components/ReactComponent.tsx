import * as React from 'react';

export interface IReactComponentProps {
}

export default class ReactComponent extends React.Component<IReactComponentProps> {
    render() {
        return (
            <div>
                React.Component method
            </div>
        );
    }
}
