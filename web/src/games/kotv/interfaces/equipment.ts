import { ResourceType } from './resource';
import { IResource } from './development';

export enum BonusType {
    HEALTH = "health",
    STRENGTH = "strength",
    ARMOR = "armor",
    MOVERANGE = "moverange",
    MOVEACTION = "moveaction",
    MPEN = "mpen",
    RPEN = "rpen",
    MPOW = "mpow",
    RPOW = "rpow",
    TARGET = "target",
}

export interface IBonus {
    kind: string;
    amount: number;
}

export interface IEquipment {
    name: string;
    bonuses: IBonus[];
    upkeep: IResource[];
}

const health2 = {
    name: "Health+2",
    bonuses: [
        {
            kind: BonusType.HEALTH,
            amount: 2
        }
    ],
    upkeep: [{
        resource: ResourceType.GOLD,
        amount: 1,
    }]
}

const health4 = {
    name: "Health+4",
    bonuses: [
        {
            kind: BonusType.HEALTH,
            amount: 4
        }
    ],
    upkeep: [{
        resource: ResourceType.GOLD,
        amount: 1,
    },{
        resource: ResourceType.BRONZE,
        amount: 1,
    }]
}

const health8 = {
    name: "Health+8",
    bonuses: [
        {
            kind: BonusType.HEALTH,
            amount: 8
        }
    ],
    upkeep: [{
        resource: ResourceType.GOLD,
        amount: 1,
    },{
        resource: ResourceType.IRON,
        amount: 1,
    }]
}

const armor7 = {
    name: "7 Armor",
    bonuses: [
        {
            kind: BonusType.ARMOR,
            amount: 7
        }
    ],
    upkeep: [{
        resource: ResourceType.GOLD,
        amount: 2,
    }]
}

const armor8 = {
    name: "8 Armor",
    bonuses: [
        {
            kind: BonusType.ARMOR,
            amount: 8
        }
    ],
    upkeep: [{
        resource: ResourceType.GOLD,
        amount: 2,
    },{
        resource: ResourceType.BRONZE,
        amount: 1,
    }]
}

const armor9 = {
    name: "9 Armor",
    bonuses: [
        {
            kind: BonusType.ARMOR,
            amount: 9
        }
    ],
    upkeep: [{
        resource: ResourceType.GOLD,
        amount: 3,
    },{
        resource: ResourceType.IRON,
        amount: 1,
    }]
}

const move1 = {
    name: "Movement I",
    bonuses: [
        {
            kind: BonusType.MOVERANGE,
            amount: 2
        },
    ],
    upkeep: [{
        resource: ResourceType.GOLD,
        amount: 1,
    }]
}

const move2 = {
    name: "Movement II",
    bonuses: [
        {
            kind: BonusType.MOVERANGE,
            amount: 3
        },
        {
            kind: BonusType.MOVEACTION,
            amount: 1
        }
    ],
    upkeep: [{
        resource: ResourceType.GOLD,
        amount: 1,
    },{
        resource: ResourceType.BRONZE,
        amount: 1,
    }]
}

const move3 = {
    name: "Movement III",
    bonuses: [
        {
            kind: BonusType.MOVERANGE,
            amount: 4
        },
        {
            kind: BonusType.MOVEACTION,
            amount: 1
        }
    ],
    upkeep: [{
        resource: ResourceType.GOLD,
        amount: 2,
    },{
        resource: ResourceType.IRON,
        amount: 1,
    }]
}

const mpen1 = {
    name: "Melee Pen. I",
    bonuses: [
        {
            kind: BonusType.MPEN,
            amount: 1.5
        }
    ],
    upkeep: [{
        resource: ResourceType.GOLD,
        amount: 1,
    }]
}

const mpen2 = {
    name: "Melee Pen. II",
    bonuses: [
        {
            kind: BonusType.MPEN,
            amount: 2
        }
    ],
    upkeep: [{
        resource: ResourceType.BRONZE,
        amount: 1,
    }]
}

const mpen3 = {
    name: "Melee Pen. III",
    bonuses: [
        {
            kind: BonusType.MPEN,
            amount: 3
        }
    ],
    upkeep: [{
        resource: ResourceType.IRON,
        amount: 1,
    }]
}

const mpow1 = {
    name: "Melee Power I",
    bonuses: [
        {
            kind: BonusType.MPOW,
            amount: 1.5
        }
    ],
    upkeep: [{
        resource: ResourceType.GOLD,
        amount: 2,
    }]
}

const mpow2 = {
    name: "Melee Power II",
    bonuses: [
        {
            kind: BonusType.MPOW,
            amount: 2
        }
    ],
    upkeep: [{
        resource: ResourceType.GOLD,
        amount: 1,
    },{
        resource: ResourceType.BRONZE,
        amount: 1,
    }]
}

const mpow3 = {
    name: "Melee Power III",
    bonuses: [
        {
            kind: BonusType.MPOW,
            amount: 3
        }
    ],
    upkeep: [{
        resource: ResourceType.BRONZE,
        amount: 1,
    },{
        resource: ResourceType.IRON,
        amount: 1,
    }]
}

const rpen1 = {
    name: "Ranged Pen. I",
    bonuses: [
        {
            kind: BonusType.RPEN,
            amount: 1.5
        }
    ],
    upkeep: [{
        resource: ResourceType.GOLD,
        amount: 1,
    }]
}

const rpen2 = {
    name: "Ranged Pen. II",
    bonuses: [
        {
            kind: BonusType.RPEN,
            amount: 2
        }
    ],
    upkeep: [{
        resource: ResourceType.BRONZE,
        amount: 1,
    }]
}

const rpen3 = {
    name: "Ranged Pen. III",
    bonuses: [
        {
            kind: BonusType.RPEN,
            amount: 3
        }
    ],
    upkeep: [{
        resource: ResourceType.IRON,
        amount: 1,
    }]
}

const rpow1 = {
    name: "Ranged Power I",
    bonuses: [
        {
            kind: BonusType.MPOW,
            amount: 1.5
        }
    ],
    upkeep: [{
        resource: ResourceType.GOLD,
        amount: 2,
    }]
}

const rpow2 = {
    name: "Ranged Power II",
    bonuses: [
        {
            kind: BonusType.MPOW,
            amount: 2
        },
        {
            kind: BonusType.TARGET,
            amount: 2
        }
    ],
    upkeep: [{
        resource: ResourceType.GOLD,
        amount: 1,
    },
    {
        resource: ResourceType.BRONZE,
        amount: 1,
    }]
}

const rpow3 = {
    name: "Ranged Power III",
    bonuses: [
        {
            kind: BonusType.MPOW,
            amount: 3
        },
        {
            kind: BonusType.TARGET,
            amount: 2
        }
    ],
    upkeep: [{
        resource: ResourceType.BRONZE,
        amount: 1,
    },{
        resource: ResourceType.IRON,
        amount: 1,
    }]
}

export const DEFAULT_EQUIPMENT = [
    { kind: health2, count: 6 },
    { kind: health4, count: 6 },
    { kind: health8, count: 6 },
    { kind: armor7, count: 6 },
    { kind: armor8, count: 6 },
    { kind: armor9, count: 6 },
    { kind: move1, count: 6 },
    { kind: move2, count: 6 },
    { kind: move3, count: 6 },
    { kind: mpen1, count: 6 },
    { kind: mpen2, count: 6 },
    { kind: mpen3, count: 6 },
    { kind: mpow1, count: 6 },
    { kind: mpow2, count: 6 },
    { kind: mpow3, count: 6 },
    { kind: rpen1, count: 6 },
    { kind: rpen2, count: 6 },
    { kind: rpen3, count: 6 },
    { kind: rpow1, count: 6 },
    { kind: rpow2, count: 6 },
    { kind: rpow3, count: 6 },
]