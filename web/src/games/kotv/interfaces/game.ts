import IPlayer from './player';
import IHexTile from './hextile';
import ITile from './hextile';
import ICouncil from './council';
import IEquipment from './equipment';
import IDevelopment, { DEFAULT_DEVELOPMENTS } from './development';
import { DEFAULT_EQUIPMENT } from './equipment';

export interface IG {
    players: IPlayer[],
    board: ITile[],
    council: ICouncil[],
    equipment: IEquipment[],
    developments: IDevelopment[],
    tiledeck1: IHexTile[],
    tiledeck2: IHexTile[],
    tiledeck3: IHexTile[],
}

export const DEFAULT_STATE:IG = {
    players: [],
    board: [],
    council: [],
    equipment: [],
    developments: [],
    tiledeck1: [],
    tiledeck2: [],
    tiledeck3: [],
}