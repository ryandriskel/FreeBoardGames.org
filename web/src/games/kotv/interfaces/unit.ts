import { IResource } from './development';
import { IEquipment, IBonus, DEFAULT_EQUIPMENT } from './equipment';

export enum UnitType {
    ARCHER = "archer",
    CAVALRY = "cavalry",
    SWORDSMAN = "swordsman",
}

export interface IUnit {
    unittype: string;
    owner?: number;
    equipment?: IEquipment[];
    bonuses?: IBonus[];
    upkeep: IResource[];
}

export const DEFAULT_UNITTYPE_EQUIPMENT = {};
DEFAULT_UNITTYPE_EQUIPMENT[UnitType.ARCHER] = [
    { ...DEFAULT_EQUIPMENT[15].kind }
];
DEFAULT_UNITTYPE_EQUIPMENT[UnitType.SWORDSMAN] = [
    { ...DEFAULT_EQUIPMENT[12].kind }
];
DEFAULT_UNITTYPE_EQUIPMENT[UnitType.CAVALRY] = [
    { ...DEFAULT_EQUIPMENT[6].kind }
];