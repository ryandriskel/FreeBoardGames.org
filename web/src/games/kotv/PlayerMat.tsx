import * as React from 'react';
import { UnitMat } from './UnitMat';
import { ExperienceTrack } from './ExperienceTrack';
import { DamageTrack } from './DamageTrack';

import { IPlayer } from './interfaces/player';
import { UnitType, NullUnit } from './interfaces/unit';

import css from './styles/playermat.css';

interface IPlayerMatProps {
    player: IPlayer;
}

interface IPlayerMatState {
}

export class PlayerMat extends React.Component<IPlayerMatProps, IPlayerMatState> {
    state: IPlayerMatState = {
    };

    render() {
        return (
            <div className={css.playerMat}>
                <div className={css.playerMatTopRow}>
                    <div className={css.playerMatUnitDesigns}>
                        <UnitMat key={1} unitDesign={this.props.player.unitDesigns[UnitType.ARCHER]} />
                        <UnitMat key={2} unitDesign={this.props.player.unitDesigns[UnitType.CAVALRY]} />
                        <UnitMat key={3} unitDesign={this.props.player.unitDesigns[UnitType.SWORDSMAN]} />
                    </div>
                    
                    {this.renderDamageTracks()}
                </div>
                <div className={css.playerMatMiddleRow}>
                    <div className={css.playerMatExperienceTrack}>
                        <ExperienceTrack units={this.props.player.units} />
                    </div>
                </div>
            </div>
        )
    }

    renderDamageTracks(){
        const tracks:any[] = [];
        for(let i:number = 0; i < 7; i++){
            tracks.push(this.renderDamageTrack(i));
        }
        return (
            <div className={css.playerMatDamageTracks}>
                {tracks}
            </div>
        );
    }

    renderDamageTrack(i:number){
        if (this.props.player.units[i] === undefined){
            return (
                <DamageTrack key={i} unit={NullUnit} />
            );
        }
        return (
            <DamageTrack key={i} unit={this.props.player.units[i]} />
        );
    }
}