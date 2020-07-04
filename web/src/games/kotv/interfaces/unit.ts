import IEquipment from './equipment';
import IBonus from './equipment';

export const enum UnitType {
    ARCHER,
    CAVALRY,
    SWORDSMAN,
}

export default interface IUnit {
    unittype: string;
    owner?: number;
    equipment?: IEquipment[];
    bonuses?: IBonus[];
}