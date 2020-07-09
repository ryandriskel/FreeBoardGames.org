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
        return (
            <div className={css.damageTrackLevelStrength}>
                <div className={css.damageTrackIcon}>
                    <BonusIcon name={BonusType.STRENGTH} />
                </div>
                <div className={css.damageTrackIcon}>
                    <BonusIcon name={BonusType.STRENGTH} />
                </div>
                <div className={css.damageTrackIcon}>
                    <BonusIcon name={BonusType.STRENGTH} />
                </div>
                <div className={css.damageTrackIcon}>
                    <BonusIcon name={BonusType.STRENGTH} />
                </div>
            </div>
        )
    }

    renderCoreStrength(){
        return (
            <div className={css.damageTrackCoreStrength}>
                <div className={css.damageTrackIcon}>
                    <BonusIcon name={BonusType.STRENGTH} />
                </div>
                <div className={css.damageTrackIcon}>
                    <BonusIcon name={BonusType.STRENGTH} />
                </div>
                <div className={css.damageTrackIcon}>
                    <BonusIcon name={BonusType.STRENGTH} />
                </div>
                <div className={css.damageTrackIcon}>
                    <BonusIcon name={BonusType.STRENGTH} />
                </div>
            </div>
        )
    }

    renderEquipmentHealth(){
        return (
            <div className={css.damageTrackEquipmentHealth}>
                <div className={css.damageTrackIcon}>
                    <BonusIcon name={BonusType.HEALTH} />
                </div>
                <div className={css.damageTrackIcon}>
                    <BonusIcon name={BonusType.HEALTH} />
                </div>
                <div className={css.damageTrackIcon}>
                    <BonusIcon name={BonusType.HEALTH} />
                </div>
                <div className={css.damageTrackIcon}>
                    <BonusIcon name={BonusType.HEALTH} />
                </div>
                <div className={css.damageTrackIcon}>
                    <BonusIcon name={BonusType.HEALTH} />
                </div>
                <div className={css.damageTrackIcon}>
                    <BonusIcon name={BonusType.HEALTH} />
                </div>
                <div className={css.damageTrackIcon}>
                    <BonusIcon name={BonusType.HEALTH} />
                </div>
                <div className={css.damageTrackIcon}>
                    <BonusIcon name={BonusType.HEALTH} />
                </div>
            </div>
        )
    }
}