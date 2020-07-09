import * as React from 'react';
import css from './styles/damagetrack.css';
import { BonusIcon } from './BonusIcon';
import { BonusType } from './interfaces/equipment';

interface IDamageTrackProps {
    unit: any;
}

interface IDamageTrackState {
}

export class DamageTrack extends React.Component<IDamageTrackProps, IDamageTrackState> {
    state: IDamageTrackState = {
    };

    render() {    
        return (
            <div className={css.damageTrackContainer}>
                {this.renderLevelStrength()}
                {this.renderCoreStrength()}
                {this.renderEquipmentHealth()}
            </div>
        )
    }

    renderLevelStrength(){
        const icons:any[] = [];
        let isDamaged:boolean = false;

        for (var i:number = 0; i < this.props.unit.ctxLevel; i++){
            isDamaged = (this.props.unit.damage >= (i+1) + this.props.unit.ctxHealth + this.props.unit.coreStrength);

            icons.push(
                <div key={i} className={[css.damageTrackIcon, isDamaged?css.damaged:null].join(' ')}>
                    <BonusIcon name={BonusType.STRENGTH} />
                </div>
            );
        }

        return (
            <div className={css.damageTrackLevelStrength}>
                {icons}
            </div>
        )
    }

    renderCoreStrength(){
        const icons:any[] = [];
        let isDamaged:boolean = false;

        for (var i:number = this.props.unit.coreStrength; i > 0; i--){
            isDamaged = (this.props.unit.damage >= i + this.props.unit.ctxHealth);

            icons.push(
                <div key={i} className={[css.damageTrackIcon, isDamaged?css.damaged:null].join(' ')}>
                    <BonusIcon name={BonusType.STRENGTH} />
                </div>
            );
        }

        return (
            <div className={css.damageTrackCoreStrength}>
                {icons}
            </div>
        )
    }

    renderEquipmentHealth(){
        const icons:any[] = [];
        let isDamaged:boolean = false;

        for (var i:number = this.props.unit.ctxHealth; i > 0; i--){
            isDamaged = (this.props.unit.damage >= i);
            icons.push(
                <div key={i} className={[css.damageTrackIcon, isDamaged?css.damaged:null].join(' ')}>
                    <BonusIcon name={BonusType.HEALTH} />
                </div>
            );
        }

        return (
            <div className={css.damageTrackEquipmentHealth}>
                {icons}
            </div>
        )
    }
}