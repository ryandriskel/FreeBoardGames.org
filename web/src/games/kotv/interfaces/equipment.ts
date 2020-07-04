import ICost from './development';
import { ResourceType } from './hextile';

export const enum Bonus {
    HEALTH = "health",
    ARMOR = "armor",
    MOVERANGE = "move range",
    MOVEACTION = "move actions",
    MPEN = "melee penetration",
    RPEN = "ranged penetration",
    MPOW = "melee power",
    RPOW = "ranged power",
    TARGET = "target",
}

export default interface IBonus {
    kind: string;
    value: number;
}

export default interface IEquipment {
    name: string;
    bonuses: IBonus[];
    upkeep: ICost[];
}

const health2 = {
    name: "Health+2",
    bonuses: [
        {
            kind: Bonus.HEALTH,
            value: 2
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
            kind: Bonus.HEALTH,
            value: 4
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
            kind: Bonus.HEALTH,
            value: 8
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
            kind: Bonus.ARMOR,
            value: 7
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
            kind: Bonus.ARMOR,
            value: 8
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
            kind: Bonus.ARMOR,
            value: 9
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
            kind: Bonus.MOVERANGE,
            value: 2
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
            kind: Bonus.MOVERANGE,
            value: 3
        },
        {
            kind: Bonus.MOVEACTION,
            value: 1
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
            kind: Bonus.MOVERANGE,
            value: 4
        },
        {
            kind: Bonus.MOVEACTION,
            value: 1
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
            kind: Bonus.MPEN,
            value: 1.5
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
            kind: Bonus.MPEN,
            value: 2
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
            kind: Bonus.MPEN,
            value: 3
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
            kind: Bonus.MPOW,
            value: -1
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
            kind: Bonus.MPOW,
            value: -2
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
            kind: Bonus.MPOW,
            value: -3
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
            kind: Bonus.RPEN,
            value: 1.5
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
            kind: Bonus.RPEN,
            value: 2
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
            kind: Bonus.RPEN,
            value: 3
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
            kind: Bonus.MPOW,
            value: -1
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
            kind: Bonus.MPOW,
            value: -2
        },
        {
            kind: Bonus.TARGET,
            value: 2
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
            kind: Bonus.MPOW,
            value: -3
        },
        {
            kind: Bonus.TARGET,
            value: 2
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