import * as React from 'react';

import css from './styles/hextile.css';

interface IHexTileProps {
}

interface IHexTileState {
}

export class HexTile extends React.Component<IHexTileProps, IHexTileState> {
    state: IHexTileState = {
    };

    render() {
        return (
            <div className={css.hextile}>HexTile</div>
        )
    }
}