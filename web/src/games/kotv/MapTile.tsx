import * as React from 'react';

import { HexTile } from './HexTile';
import { IMapTile } from './interfaces/hextile';

import css from './styles/maptile.css';

export interface IMapTileProps {
    tile: IMapTile;
}

interface IMapTileState {
}

export class MapTile extends React.Component<IMapTileProps, IMapTileState> {
    state: IMapTileState = {
    };

    render() {
        if (this.props.tile.hextile.id === undefined){
            return null;
        }

        const rotation:string = "rotate("+this.props.tile.rotation+"deg)";
        return (
            <div className={css.MapTile} style={{transform: rotation}}>
                <HexTile hex={this.props.tile.hextile} />
            </div>
        )
    }
}