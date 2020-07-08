import * as React from 'react';

import css from './styles/bonus.css';

export interface IBonusIconProps {
    name: string;
}

interface IBonusIconState {
}

export class BonusIcon extends React.Component<IBonusIconProps, IBonusIconState> {
    state: IBonusIconState = {
    };

    render() {
        return (
            <div className={[css.bonusIcon, css[this.props.name]].join(' ')}></div>
        );
    }
}