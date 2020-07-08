import * as React from 'react';

import { IBonus, BonusType } from './interfaces/equipment';
import { BonusIcon } from './BonusIcon'

import css from './styles/bonus.css';

export interface IBonusProps {
    bonus: IBonus;
}

interface IBonusState {
}

export class Bonus extends React.Component<IBonusProps, IBonusState> {
    state: IBonusState = {
    };

    displayType:any = {
    };

    render() {
        this.displayType[BonusType.ARMOR] = "Total";
        this.displayType[BonusType.MPOW] = "Multiply";
        this.displayType[BonusType.RPOW] = "Multiply";
        this.displayType[BonusType.MPEN] = "Subtract";
        this.displayType[BonusType.RPEN] = "Subtract";
        this.displayType[BonusType.HEALTH] = "ADD";
        this.displayType[BonusType.MOVEACTION] = "Hidden";
        this.displayType[BonusType.MOVERANGE] = "Total";

        return (
            <div className={css.bonus}>
                <div className={css.bonusIconContainer}>
                    <BonusIcon name={this.props.bonus.kind} />
                </div>
                <div className={css.bonusAmount}>
                    {this.renderPrefix()}
                    {this.renderAmount()}
                    {this.renderPostfix()}
                </div>
            </div>
        );
    }

    renderAmount(){
        if (this.displayType[this.props.bonus.kind] === "Hidden"){
            return null;
        }
        return this.props.bonus.amount;
    }

    renderPrefix(){
        if (this.displayType[this.props.bonus.kind] === "Subtract"){
            return "-";
        }
        if (this.displayType[this.props.bonus.kind] === "Add"){
            return "+";
        }
        return null;
    }

    renderPostfix(){
        if (this.displayType[this.props.bonus.kind] === "Multiply"){
            return "x";
        }
        return null;
    }
}