import * as React from 'react';

import css from './styles/resources.css';

export interface IResourceIconProps {
    name: string;
}

interface IResourceIconState {
}

export class ResourceIcon extends React.Component<IResourceIconProps, IResourceIconState> {
    state: IResourceIconState = {
    };

    render() {
        return (
            <div className={[css.resource, css[this.props.name]].join(' ')} title={this.props.name}></div>
        );
    }
}