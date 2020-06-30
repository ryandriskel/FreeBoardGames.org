import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Ctx } from 'boardgame.io';
import { IG } from './game';
import { isOnlineGame, isLocalGame, isAIGame } from '../../gamesShared/helpers/gameMode';

interface IBoardProps {
  G: IG;
  ctx: Ctx;
  moves: any;
  step?: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

interface IBoardState {
  
}

export class Board extends React.Component<IBoardProps, IBoardState> {
    state: IBoardState = {
    };

    render() {
        return "Board";
    }
}