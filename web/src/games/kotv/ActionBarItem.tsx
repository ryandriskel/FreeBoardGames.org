import * as React from 'react';

import css from './styles/actionbar.css';

export interface IActionBarItemProps {
  abbr: string;
  name: string;
  count: number;
  disabled?: boolean;
  move: any;
}

interface IActionBarItemState {
  
}

export class ActionBarItem extends React.Component<IActionBarItemProps, IActionBarItemState> {
    state: IActionBarItemState = {
    };

    render() {
        return (
            <li className={[css.actionBarItem, this.props.disabled ? css.disabled : ""].join(" ")}>
                <div className={css.actionBarItemAbbr}>{this.props.abbr}</div>
                <div className={css.actionBarItemName}>{this.props.name}</div>
            </li>
        );
    }
}