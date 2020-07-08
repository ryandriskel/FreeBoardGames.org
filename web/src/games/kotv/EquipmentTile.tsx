import * as React from 'react';

import css from './styles/equipment.css';
import { ResourceCost } from './ResourceCost';
import { Bonus } from './Bonus';
import { IEquipment } from './interfaces/equipment';

export interface IEquipmentTileProps {
    equipment: IEquipment;
}

interface IEquipmentTileState {
}

export class EquipmentTile extends React.Component<IEquipmentTileProps, IEquipmentTileState> {
    state: IEquipmentTileState = {
    };

    render() {
        return (
            <div className={css.equipmentContainer}>
                <div className={css.equipmentName}>
                    {this.props.equipment.name}
                </div>
                <div className={css.equipmentBonuses}>
                    {this.props.equipment.bonuses.map((bonus, index) => {
                        return (
                            <div key={index} className={css.equipmentBonusContainer}>
                                <Bonus bonus={bonus} />
                            </div>
                        )
                    })}
                </div>
                <div className={css.equipmentCosts}>
                    {this.props.equipment.upkeep.map((cost, index) => {
                        return (
                            <ResourceCost key={index} cost={cost} />
                        )
                    })}
                </div>
            </div>
        );
    }
}