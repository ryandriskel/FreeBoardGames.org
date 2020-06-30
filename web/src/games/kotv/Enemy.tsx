import * as React from 'react';

interface IEnemyProps {
}

interface IEnemyState {
}

export class Enemy extends React.Component<IEnemyProps, IEnemyState> {
    state: IEnemyState = {
    };

    render() {
        return "Enemy";
    }
}