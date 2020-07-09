import * as React from 'react';

import css from './styles/unit.css';
import { IUnitDesign } from './interfaces/unit';
import { ResourceCost } from './ResourceCost';
import { EquipmentTile } from './EquipmentTile';

export interface IUnitMatProps {
    unitDesign: IUnitDesign;
}

interface IUnitMatState {
}

export class UnitMat extends React.Component<IUnitMatProps, IUnitMatState> {
    state: IUnitMatState = {
    };

    render() {
        return (
            <div className={css.unitMatContainer}>
                <div className={css.unitMatHeader}>
                    {this.props.unitDesign.unittype}
                    <div className={css.unitDefaultCost}>
                        <ResourceCost cost={this.props.unitDesign.upkeep[0]} />
                    </div>
                </div>
                <div className={css.unitMatEquipmentContainer}>
                    {this.renderEquipmentSlot(0)}
                    {this.renderEquipmentSlot(1)}
                    {this.renderEquipmentSlot(2)}
                    {this.renderEquipmentSlot(3)}
                </div>
            </div>
        );
    }

    renderEquipmentSlot(index:number){
        if (!('equipment' in this.props.unitDesign)){
            return null;
        }
        
        if (this.props.unitDesign.equipment[index] === undefined){
            return (
                <div key={index} className={css.unitMatEquipmentSlot}>
                    Item {index+1}
                </div>
            )
        }

        return (
            <EquipmentTile key={index} equipment={this.props.unitDesign.equipment[index]} />
        );
    }
}