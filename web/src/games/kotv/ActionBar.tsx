import * as React from 'react';
import { Ctx } from 'boardgame.io';
import { IG } from './interfaces/game';

import css from './styles/actionbar.css';
import { ActionBarItem } from './ActionBarItem';

interface IActionBarProps {
  /*G: IG;
  ctx: Ctx;
  moves: any;
  step?: any;
  playerID: string;*/
}

interface IActionBarState {
  
}

export class ActionBar extends React.Component<IActionBarProps, IActionBarState> {
    state: IActionBarState = {
    };

    render() {
        const actionList = [
            {
                abbr: "EXP",
                name: "Explore",
                move: null,
            },
            {
                abbr: "COU",
                name: "Council",
                disabled: true,
                move: null,
            },
            {
                abbr: "DEV",
                name: "Develop",
                move: null,
            },
            {
                abbr: "UPG",
                name: "Upgrade",
                move: null,
            },
            {
                abbr: "UNI",
                name: "Unit",
                count: 2,
                move: null,
            },
        ];

        return (
            <ul className={css.actionBarContainer}>
                {this.renderActionList(actionList)}
            </ul>
        );
    }

    renderActionList(actionList){
        return actionList.map((action, index)=>{
            return (
                <ActionBarItem  key={"action_bar_item_"+index} {...action} />
            );
        });
    }
}