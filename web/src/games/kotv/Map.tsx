import * as React from 'react';
import { MapTile } from './MapTile';

import css from './styles/map.css';

export interface IMapProps {
    layout: Object;
}

interface IMapState {
}

export class Map extends React.Component<IMapProps, IMapState> {
    state: IMapState = {
    };

    render() {
        return (
            <div className={css.MapContainer}>
                <div className={css.MapScaleContainer}>
                    {this.renderTileCols(this.props.layout)}
                </div>
            </div>
        )
    }

    renderTileCols(tileCols){
        return Object.keys(tileCols).map((column: any) => {
            return this.renderTileRows(tileCols[column], column);
        });
    }

    renderTileRows(tileRow, column){
        return Object.keys(tileRow).map((row: any) => {
            const tile = this.props.layout[column][row];
            const c:number = parseInt(column);
            const r:number = parseInt(row);
            const width:number = 531;
            const height:number = 612;
            const x:number = c*width;
            const y:number = r*height - (Math.abs(c%2) * (height/2));
            const translation:string = "translate("+x+"px, "+y+"px)";
            const key = "tile"+column+"_"+row;
            return (
                <div key={key} className={css.MapTileContainer} style={{transform: translation}}>
                    <MapTile tile={tile} />
                </div>
            );
          });
    }
}