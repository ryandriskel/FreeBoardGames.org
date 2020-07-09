import { IResource } from './development';
import { IEquipment, IBonus, DEFAULT_EQUIPMENT } from './equipment';

export enum UnitType {
    ARCHER = "archer",
    CAVALRY = "cavalry",
    SWORDSMAN = "swordsman",
}

export interface IUnit {
    design: IUnitDesign;
    experience: number;
    upkeep: IResource[];
    coreStrength: number;
    ctxLevel: number;
    ctxHealth: number;
    damage: number;
    owner?: number;
    bonuses?: IBonus[];
}

export interface IUnitDesign {
    unittype: string;
    equipment: IEquipment[];
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