import { INVALID_MOVE } from 'boardgame.io/core';
import { Ctx, Game } from 'boardgame.io';
import IPlayer from './interfaces/player';
import IHexTile from './interfaces/hextile';
import ICouncil from './interfaces/council';
import IEquipment from './interfaces/equipment';
import IDevelopment from './interfaces/development';

export interface IG {
    players: IPlayer[],
    board: IHexTile[],
    council: ICouncil[],
    equipment: IEquipment[],
    developments: IDevelopment[],
}