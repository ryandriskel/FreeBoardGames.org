const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef } from 'gamesShared/definitions/game';
import instructions from './instructions.md';

export const checkersGameDef: IGameDef = {
  code: 'kotv',
  name: 'Knights of the Vale',
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.OnlineFriend }, { mode: GameMode.LocalFriend }],
  minPlayers: 2,
  maxPlayers: 4,
  description: 'a Heavy Strategy Game',
  descriptionTag: `Play Knights of the Vale locally
  or online against friends!`,
  instructions: {
    videoId: 'yFrAN-LFZRU',
    text: instructions,
  },
  config: () => import('./config')
};
