import { TerrainType } from './hextile'
import { ResourceType } from './resource'

export interface IResource {
    resource: string;
    amount: number;
}

export interface IDevelopment {
    name: string;
    terrain: string[];
    cost: IResource[];
    benefit: IResource;
}

const food1 = {
    name: "Food I",
    terrain: [
        TerrainType.WETLANDS,
        TerrainType.PLAINS,
        TerrainType.FOREST,
    ],
    cost: [],
    benefit: {
        resource: ResourceType.FOOD,
        amount: 4,
    },
}

const food2 = {
    name: "Food II",
    terrain: [
        TerrainType.WETLANDS,
        TerrainType.PLAINS,
        TerrainType.FOREST,
    ],
    cost: [{
        resource: ResourceType.CLAY,
        amount: 1,
    }],
    benefit: {
        resource: ResourceType.FOOD,
        amount: 6,
    },
}

const food3 = {
    name: "Food III",
    terrain: [
        TerrainType.WETLANDS,
        TerrainType.PLAINS,
        TerrainType.FOREST,
    ],
    cost: [{
        resource: ResourceType.CLAY,
        amount: 3,
    }],
    benefit: {
        resource: ResourceType.FOOD,
        amount: 8,
    },
}

const cloth1 = {
    name: "Cloth I",
    terrain: [
        TerrainType.PLAINS,
    ],
    cost: [{
        resource: ResourceType.CLAY,
        amount: 3,
    }],
    benefit: {
        resource: ResourceType.CLOTH,
        amount: 4,
    },
}

const cloth2 = {
    name: "Cloth II",
    terrain: [
        TerrainType.PLAINS,
    ],
    cost: [{
        resource: ResourceType.CLAY,
        amount: 4,
    },{
        resource: ResourceType.WOOD,
        amount: 1,
    }],
    benefit: {
        resource: ResourceType.CLOTH,
        amount: 6,
    },
}

const beer1 = {
    name: "Beer I",
    terrain: [
        TerrainType.GRASSLAND,
    ],
    cost: [{
        resource: ResourceType.CLAY,
        amount: 3,
    },{
        resource: ResourceType.WOOD,
        amount: 2,
    }],
    benefit: {
        resource: ResourceType.BEER,
        amount: 5,
    },
}

const furs1 = {
    name: "Furs I",
    terrain: [
        TerrainType.HILLS,
    ],
    cost: [{
        resource: ResourceType.CLAY,
        amount: 2,
    },{
        resource: ResourceType.WOOD,
        amount: 3,
    }],
    benefit: {
        resource: ResourceType.FURS,
        amount: 4,
    },
}

const clay1 = {
    name: "Clay I",
    terrain: [
        TerrainType.WETLANDS,
    ],
    cost: [],
    benefit: {
        resource: ResourceType.CLAY,
        amount: 2,
    },
}

const clay2 = {
    name: "Clay II",
    terrain: [
        TerrainType.WETLANDS,
    ],
    cost: [{
        resource: ResourceType.CLAY,
        amount: 1,
    }],
    benefit: {
        resource: ResourceType.CLAY,
        amount: 3,
    },
}

const clay3 = {
    name: "Clay III",
    terrain: [
        TerrainType.WETLANDS,
    ],
    cost: [{
        resource: ResourceType.CLAY,
        amount: 3,
    }],
    benefit: {
        resource: ResourceType.CLAY,
        amount: 4,
    },
}

const wood1 = {
    name: "Wood I",
    terrain: [
        TerrainType.FOREST,
    ],
    cost: [{
        resource: ResourceType.CLAY,
        amount: 3,
    }],
    benefit: {
        resource: ResourceType.WOOD,
        amount: 2,
    },
}

const wood2 = {
    name: "Wood II",
    terrain: [
        TerrainType.FOREST,
    ],
    cost: [{
        resource: ResourceType.CLAY,
        amount: 4,
    },{
        resource: ResourceType.WOOD,
        amount: 1,
    }],
    benefit: {
        resource: ResourceType.WOOD,
        amount: 3,
    },
}

const bronze1 = {
    name: "Bronze I",
    terrain: [
        TerrainType.HILLS,
    ],
    cost: [{
        resource: ResourceType.CLAY,
        amount: 3,
    },{
        resource: ResourceType.WOOD,
        amount: 2,
    }],
    benefit: {
        resource: ResourceType.BRONZE,
        amount: 4,
    },
}

const stone1 = {
    name: "Stone I",
    terrain: [
        TerrainType.MOUNTAINS,
    ],
    cost: [{
        resource: ResourceType.CLAY,
        amount: 2,
    },{
        resource: ResourceType.WOOD,
        amount: 3,
    }],
    benefit: {
        resource: ResourceType.STONE,
        amount: 1,
    },
}

const iron1 = {
    name: "Iron I",
    terrain: [
        TerrainType.MOUNTAINS,
    ],
    cost: [{
        resource: ResourceType.CLAY,
        amount: 2,
    },{
        resource: ResourceType.WOOD,
        amount: 3,
    }],
    benefit: {
        resource: ResourceType.IRON,
        amount: 3,
    },
}

export const DEFAULT_DEVELOPMENTS = [
    { kind: food1, count: 15 },
    { kind: food2, count: 12 },
    { kind: food3, count: 10 },
    { kind: cloth1, count: 15 },
    { kind: cloth2, count: 10 },
    { kind: beer1, count: 20 },
    { kind: furs1, count: 10 },
    { kind: clay1, count: 15 },
    { kind: clay2, count: 12 },
    { kind: clay3, count: 10 },
    { kind: wood1, count: 15 },
    { kind: wood2, count: 10 },
    { kind: bronze1, count: 10 },
    { kind: stone1, count: 10 },
    { kind: iron1, count: 10 },
];