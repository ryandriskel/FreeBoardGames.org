import IPlayer from './player';
import ICouncil from './council';
import IEquipment from './equipment';
import IDevelopment, { DEFAULT_DEVELOPMENTS } from './development';
import { DEFAULT_EQUIPMENT } from './equipment';
import { IHexTile } from './hextile';

export interface IG {
    players: IPlayer[],
    board: Object[],
    council: ICouncil[],
    equipment: IEquipment[],
    developments: IDevelopment[],
    tiledeck1: IHexTile[],
    tiledeck2: IHexTile[],
    tiledeck3: IHexTile[],
    round: number,
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
    round: 0,
}