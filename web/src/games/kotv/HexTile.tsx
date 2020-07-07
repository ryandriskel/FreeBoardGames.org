import * as React from 'react';

import { HexFiles } from './media/hex_imports';
import { IHexTile } from './interfaces/hextile';

import css from './styles/hextile.css';

interface IHexTileProps {
    hex: IHexTile;
}

interface IHexTileState {
}

export class HexTile extends React.Component<IHexTileProps, IHexTileState> {
    state: IHexTileState = {
    };

    render() {
        return (
            <svg width="707" height="612" viewBox="0 0 707 612" version="1.1" className={css.HexTile}>
                <g transform="matrix(7.07374e-17,1.15523,-1.15523,7.07374e-17,707,-101.796)">
                    <path d="M353,0L618.004,153L618.004,459L353,612L87.996,459L87.996,153L353,0Z" className={css.HexTileBackground}/>
                    <path d="M353,0L618.004,153L618.004,459L353,612L87.996,459L87.996,153L353,0ZM91.603,456.918L353,607.835L614.397,456.918L614.397,155.082L353,4.165L91.603,155.082L91.603,456.918Z"/>
                </g>
                {this.renderImage(this.props.hex.id)}
            </svg>
        )
    }

    renderImage(hexID) {
        if (hexID === null) return null;
        return (
            <image href={HexFiles[hexID]} width="707" height="612" x="0" y="0" />
        )
    }
}