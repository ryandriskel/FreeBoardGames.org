import * as React from 'react';

import css from './styles/resources.css';
import { ResourceIcon } from './ResourceIcon';
import { IResource } from './interfaces/development';

export interface IResourceCostProps {
    cost: IResource;
}

interface IResourceCostState {
}

export class ResourceCost extends React.Component<IResourceCostProps, IResourceCostState> {
    state: IResourceCostState = {
    };

    render() {
        return (
            <div className={css.resourceCost}>
                <div className={css.resourceCostAmount}>{this.props.cost.amount}</div>
                <div className={css.resourceIconContainer}>
                    <ResourceIcon name={this.props.cost.resource} />
                </div>
            </div>
        );
    }
}