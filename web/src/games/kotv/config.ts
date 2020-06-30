import { IGameConfig } from 'gamesShared/definitions/game';
import { KotvGame } from './game';
import { Board } from './board';

const config: IGameConfig = {
  bgioGame: KotvGame,
  bgioBoard: Board,
};

export default config;
