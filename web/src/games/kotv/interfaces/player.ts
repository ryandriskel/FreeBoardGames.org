import { IResource } from "./development";
import { IUnitDesign, IUnit, DEFAULT_UNITTYPE_EQUIPMENT, UnitType } from "./unit";
import { ResourceType } from "./resource";

export enum ColorTypes {
    BLACK = "black",
    BLUE = "blue",
    GREEN = "green",
    RED = "red",
    WHITE = "white",
    YELLOW = "yellow",
}

export interface IPlayerUnitDesigns {
    archer: IUnitDesign;
    cavalry: IUnitDesign;
    swordsman: IUnitDesign;
}

export const DEFAULT_UNIT_DESIGNS:IPlayerUnitDesigns = {
    archer: {
        unittype: UnitType.ARCHER,
        equipment: DEFAULT_UNITTYPE_EQUIPMENT[UnitType.ARCHER],
        upkeep: [{
            resource: ResourceType.GOLD,
            amount: 1,
        }]
    },
    cavalry: {
        unittype: UnitType.CAVALRY,
        equipment: DEFAULT_UNITTYPE_EQUIPMENT[UnitType.CAVALRY],
        upkeep: [{
            resource: ResourceType.GOLD,
            amount: 1,
        }]
    },
    swordsman: {
        unittype: UnitType.SWORDSMAN,
        equipment: DEFAULT_UNITTYPE_EQUIPMENT[UnitType.SWORDSMAN],
        upkeep: [{
            resource: ResourceType.GOLD,
            amount: 1,
        }]
    },
}

export interface IPlayer {
    color: string;
    passed: boolean;
    actions_taken: number;
    units: IUnit[];
    unitDesigns: IPlayerUnitDesigns;
    resources: IResource[];
    income: IResource[];
}