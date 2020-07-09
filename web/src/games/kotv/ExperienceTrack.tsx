import * as React from 'react';
import css from './styles/experience.css';

interface IExperienceTrackProps {
    units: any;
}

interface IExperienceTrackState {
}

export class ExperienceTrack extends React.Component<IExperienceTrackProps, IExperienceTrackState> {
    track:any = {
        length: 40,
        levels: [4, 12, 24, 40],
    };

    state: IExperienceTrackState = {
    };

    render() {    
        const boxes:any[] = [];

        for (var i:number = 1; i <= this.track.length; i++){
            boxes.push(this.renderBox(i));
        }

        return (
            <div className={css.experienceContainer}>
                {boxes}
            </div>
        )
    }

    renderBox(i){
        return (
            <div className={[css.experienceBox, (this.track.levels.includes(i))?css.experienceLevel:null].join(' ')}>{i}</div>
        );
    }
}