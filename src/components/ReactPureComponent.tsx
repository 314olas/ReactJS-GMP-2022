import * as React from 'react';

export interface IReactPureComponentProps {
}

export default class ReactPureComponent extends React.PureComponent<IReactPureComponentProps> {
    render() {
        return (
            <div>
                React.PureComponent method
            </div>
        );
    }
}
