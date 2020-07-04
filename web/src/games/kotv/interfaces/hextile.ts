import IBonus, { Bonus } from './equipment';
import IUnit from './unit';

export const enum ResourceType {
    GOLD = "gold",
    FOOD = "food",
    CLOTH = "cloth",
    CLAY = "clay",
    BEER = "beer",
    WOOD = "wood",
    BRONZE = "bronze",
    FURS = "furs",
    IRON = "iron",
    STONE = "stone",
}

export const enum TerrainType {
    CANYON = "canyon",
    FOREST = "forest",
    GRASSLAND = "grassland",
    HILLS = "hills",
    PLAINS = "plains",
    MOUNTAINS = "mountains",
    WETLANDS = "wetlands",
}

export const enum NativeType {
    ANTS = "ants",
    DRAGONS = "dragons",
    OGRES = "ogres",
    ORCS = "orcs",
    WOLVES = "wolves",
}

export default interface IHexTile {
    id: number,
    exits: boolean[];
    bonuses?: IBonus[];
    terrain?: string;
    native?: string;
    castle?: boolean;
}

export default interface ITile {
    hextile: IHexTile;
    units: IUnit[];
    ownership: number;
    rotation: number;
}

/*
ring 1: 20 hexes for 18 spaces: 40% wetlands, 30% plains, 20% grasslands, 10% forests
ring 2: 40 hexes for 36-40 spaces: 20% wetlands, 20% forests, 20% plains, 10% hills, 10% canyons, 20% grasslands
ring 3: 60 hexes: 10% forests, 10% grasslands, 20% canyons, 15% hills, 35% mountains, 10% wetlands

That makes the total number of supplied hexes for each terrain:

wetlands: 22
plains: 14
grasslands: 18
forests: 16
hills: 13
canyons: 16
mountains: 21
*/
const DEFAULT_TERRAIN_BONUS = {};
DEFAULT_TERRAIN_BONUS[TerrainType.WETLANDS] = [{kind: Bonus.MPOW, value: -1},{kind: Bonus.RPOW, value: -1}];
DEFAULT_TERRAIN_BONUS[TerrainType.PLAINS] = [];
DEFAULT_TERRAIN_BONUS[TerrainType.CANYON] = [{kind: Bonus.RPOW, value: 1}];
DEFAULT_TERRAIN_BONUS[TerrainType.FOREST] = [];
DEFAULT_TERRAIN_BONUS[TerrainType.GRASSLAND] = [{kind: Bonus.MPOW, value: 1}];
DEFAULT_TERRAIN_BONUS[TerrainType.HILLS] = [{kind: Bonus.RPOW, value: 1}];
DEFAULT_TERRAIN_BONUS[TerrainType.MOUNTAINS] = [{kind: Bonus.MPOW, value: 1},{kind: Bonus.RPOW, value: 1}];

export const DEFAULT_HEX_DATA = [
    { id: 0, exits: [1,1,1,1,1,1], terrain: null, native: null, castle: true, },
    { id: 1, exits: [1,0,1,0,1,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 2, exits: [1,1,0,1,0,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 3, exits: [1,1,0,1,0,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 4, exits: [1,1,0,0,1,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 5, exits: [1,1,0,0,1,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 6, exits: [1,1,1,0,1,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 7, exits: [1,1,1,0,1,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 8, exits: [1,1,0,1,1,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 9, exits: [1,1,0,1,1,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 10, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: null, castle: false, },
    { id: 11, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: null, castle: false, },
    { id: 12, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: null, castle: false, },
    { id: 13, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: null, castle: false, },
    { id: 14, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: null, castle: false, },
    { id: 15, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: NativeType.WOLVES, castle: false, },
    { id: 16, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: NativeType.WOLVES, castle: false, },
    { id: 17, exits: [1,1,1,1,1,0], terrain: TerrainType.FOREST, native: null, castle: false, },
    { id: 18, exits: [1,1,1,1,1,0], terrain: TerrainType.FOREST, native: null, castle: false, },
    { id: 19, exits: [1,1,1,1,1,0], terrain: TerrainType.FOREST, native: null, castle: false, },
    { id: 20, exits: [1,1,1,0,1,0], terrain: TerrainType.FOREST, native: NativeType.WOLVES, castle: false, },
    { id: 21, exits: [1,1,0,1,1,0], terrain: TerrainType.FOREST, native: null, castle: false, },
    { id: 22, exits: [1,1,0,1,1,0], terrain: TerrainType.FOREST, native: NativeType.WOLVES, castle: false, },
    { id: 23, exits: [1,1,1,1,0,0], terrain: TerrainType.FOREST, native: NativeType.WOLVES, castle: false, },
    { id: 24, exits: [1,1,1,1,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.ANTS, castle: false, },
    { id: 25, exits: [1,1,1,1,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.ANTS, castle: false, },
    { id: 26, exits: [1,1,1,1,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.ANTS, castle: false, },
    { id: 27, exits: [1,1,1,1,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.ANTS, castle: false, },
    { id: 28, exits: [1,1,1,0,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.ORCS, castle: false, },
    { id: 29, exits: [1,1,0,1,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.ORCS, castle: false, },
    { id: 30, exits: [1,1,0,1,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.OGRES, castle: false, },
    { id: 31, exits: [1,1,1,1,0,0], terrain: TerrainType.CANYON, native: NativeType.ORCS, castle: false, },
    { id: 32, exits: [1,1,0,1,0,0], terrain: TerrainType.CANYON, native: NativeType.ORCS, castle: false, },
    { id: 33, exits: [1,1,0,0,1,0], terrain: TerrainType.CANYON, native: NativeType.ORCS, castle: false, },
    { id: 34, exits: [1,1,1,1,0,0], terrain: TerrainType.CANYON, native: NativeType.ORCS, castle: false, },
    { id: 35, exits: [1,1,1,0,1,0], terrain: TerrainType.CANYON, native: NativeType.ANTS, castle: false, },
    { id: 36, exits: [1,1,0,1,1,0], terrain: TerrainType.CANYON, native: NativeType.ANTS, castle: false, },
    { id: 37, exits: [1,1,1,0,0,0], terrain: TerrainType.CANYON, native: NativeType.DRAGONS, castle: false, },
    { id: 38, exits: [1,1,0,1,1,0], terrain: TerrainType.HILLS, native: NativeType.ORCS, castle: false, },
    { id: 39, exits: [1,1,1,0,1,0], terrain: TerrainType.HILLS, native: NativeType.OGRES, castle: false, },
    { id: 40, exits: [1,1,1,1,0,0], terrain: TerrainType.HILLS, native: NativeType.OGRES, castle: false, },
    { id: 41, exits: [1,0,1,0,1,0], terrain: TerrainType.HILLS, native: NativeType.OGRES, castle: false, },
    { id: 42, exits: [1,1,0,0,1,0], terrain: TerrainType.HILLS, native: NativeType.DRAGONS, castle: false, },
    { id: 43, exits: [1,1,0,1,0,0], terrain: TerrainType.HILLS, native: NativeType.DRAGONS, castle: false, },
    { id: 44, exits: [1,0,1,0,1,0], terrain: TerrainType.MOUNTAINS, native: NativeType.OGRES, castle: false, },
    { id: 45, exits: [1,1,0,1,0,0], terrain: TerrainType.MOUNTAINS, native: NativeType.OGRES, castle: false, },
    { id: 46, exits: [1,1,0,0,1,0], terrain: TerrainType.MOUNTAINS, native: NativeType.OGRES, castle: false, },
    { id: 47, exits: [1,0,1,0,1,0], terrain: TerrainType.MOUNTAINS, native: NativeType.DRAGONS, castle: false, },
    { id: 48, exits: [1,1,0,1,0,0], terrain: TerrainType.MOUNTAINS, native: NativeType.DRAGONS, castle: false, },
    { id: 49, exits: [1,1,0,0,1,0], terrain: TerrainType.MOUNTAINS, native: NativeType.DRAGONS, castle: false, },
    { id: 50, exits: [1,1,1,0,0,0], terrain: TerrainType.MOUNTAINS, native: NativeType.DRAGONS, castle: false, },
    { id: 51, exits: [1,0,1,0,1,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 52, exits: [1,1,1,1,0,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 53, exits: [1,1,0,1,1,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 54, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: null, castle: false, },
    { id: 55, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: null, castle: false, },
    { id: 56, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: NativeType.WOLVES, castle: false, },
    { id: 57, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: NativeType.WOLVES, castle: false, },
    { id: 58, exits: [1,1,1,1,1,0], terrain: TerrainType.FOREST, native: NativeType.WOLVES, castle: false, },
    { id: 59, exits: [1,1,1,0,1,0], terrain: TerrainType.FOREST, native: null, castle: false, },
    { id: 60, exits: [1,1,1,1,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.ANTS, castle: false, },
    { id: 61, exits: [1,1,1,1,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.ANTS, castle: false, },
    { id: 62, exits: [1,1,0,1,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.ORCS, castle: false, },
    { id: 63, exits: [1,0,1,0,1,0], terrain: TerrainType.CANYON, native: NativeType.ORCS, castle: false, },
    { id: 64, exits: [1,1,0,1,1,0], terrain: TerrainType.CANYON, native: NativeType.ANTS, castle: false, },
    { id: 65, exits: [1,1,0,1,1,0], terrain: TerrainType.HILLS, native: NativeType.ORCS, castle: false, },
    { id: 66, exits: [1,1,1,0,1,0], terrain: TerrainType.HILLS, native: NativeType.OGRES, castle: false, },
    { id: 67, exits: [1,1,1,0,0,0], terrain: TerrainType.HILLS, native: NativeType.DRAGONS, castle: false, },
    { id: 68, exits: [1,0,1,0,1,0], terrain: TerrainType.MOUNTAINS, native: NativeType.OGRES, castle: false, },
    { id: 69, exits: [1,0,1,0,1,0], terrain: TerrainType.MOUNTAINS, native: NativeType.OGRES, castle: false, },
    { id: 70, exits: [1,1,0,1,0,0], terrain: TerrainType.MOUNTAINS, native: NativeType.DRAGONS, castle: false, },
    { id: 71, exits: [1,0,1,0,1,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 72, exits: [1,1,0,1,0,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 73, exits: [1,1,0,0,1,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 74, exits: [1,1,1,0,1,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 75, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: null, castle: false, },
    { id: 76, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: null, castle: false, },
    { id: 77, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: NativeType.WOLVES, castle: false, },
    { id: 78, exits: [1,1,1,1,1,0], terrain: TerrainType.FOREST, native: null, castle: false, },
    { id: 79, exits: [1,1,1,0,1,0], terrain: TerrainType.FOREST, native: null, castle: false, },
    { id: 80, exits: [1,1,1,1,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.ANTS, castle: false, },
    { id: 81, exits: [1,1,1,1,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.ANTS, castle: false, },
    { id: 82, exits: [1,1,1,0,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.ORCS, castle: false, },
    { id: 83, exits: [1,1,1,0,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.OGRES, castle: false, },
    { id: 84, exits: [1,1,0,1,0,0], terrain: TerrainType.CANYON, native: NativeType.ORCS, castle: false, },
    { id: 85, exits: [1,0,1,0,1,0], terrain: TerrainType.CANYON, native: NativeType.DRAGONS, castle: false, },
    { id: 86, exits: [1,1,1,1,0,0], terrain: TerrainType.HILLS, native: NativeType.OGRES, castle: false, },
    { id: 87, exits: [1,0,1,0,1,0], terrain: TerrainType.HILLS, native: NativeType.DRAGONS, castle: false, },
    { id: 88, exits: [1,0,1,0,1,0], terrain: TerrainType.MOUNTAINS, native: NativeType.OGRES, castle: false, },
    { id: 89, exits: [1,1,0,0,1,0], terrain: TerrainType.MOUNTAINS, native: NativeType.DRAGONS, castle: false, },
    { id: 90, exits: [1,1,1,0,0,0], terrain: TerrainType.MOUNTAINS, native: NativeType.DRAGONS, castle: false, },
    { id: 91, exits: [1,1,1,1,0,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 92, exits: [1,1,1,0,1,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 93, exits: [1,1,0,1,1,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 94, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: null, castle: false, },
    { id: 95, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: null, castle: false, },
    { id: 96, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: null, castle: false, },
    { id: 97, exits: [1,1,1,1,1,0], terrain: TerrainType.FOREST, native: null, castle: false, },
    { id: 98, exits: [1,1,1,0,1,0], terrain: TerrainType.FOREST, native: NativeType.WOLVES, castle: false, },
    { id: 99, exits: [1,1,0,1,1,0], terrain: TerrainType.FOREST, native: null, castle: false, },
    { id: 100, exits: [1,1,1,1,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.ANTS, castle: false, },
    { id: 101, exits: [1,1,0,1,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.ORCS, castle: false, },
    { id: 102, exits: [1,1,0,0,1,0], terrain: TerrainType.CANYON, native: NativeType.ORCS, castle: false, },
    { id: 103, exits: [1,1,0,1,1,0], terrain: TerrainType.CANYON, native: NativeType.ORCS, castle: false, },
    { id: 104, exits: [1,1,1,0,1,0], terrain: TerrainType.CANYON, native: NativeType.ANTS, castle: false, },
    { id: 105, exits: [1,1,1,0,1,0], terrain: TerrainType.HILLS, native: NativeType.OGRES, castle: false, },
    { id: 106, exits: [1,1,0,0,1,0], terrain: TerrainType.HILLS, native: NativeType.DRAGONS, castle: false, },
    { id: 107, exits: [1,1,0,1,0,0], terrain: TerrainType.HILLS, native: NativeType.DRAGONS, castle: false, },
    { id: 108, exits: [1,1,0,1,0,0], terrain: TerrainType.MOUNTAINS, native: NativeType.OGRES, castle: false, },
    { id: 109, exits: [1,1,0,0,1,0], terrain: TerrainType.MOUNTAINS, native: NativeType.OGRES, castle: false, },
    { id: 110, exits: [1,1,0,0,1,0], terrain: TerrainType.MOUNTAINS, native: NativeType.DRAGONS, castle: false, },
    { id: 111, exits: [1,1,1,0,1,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 112, exits: [1,1,0,1,1,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 113, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: NativeType.WOLVES, castle: false, },
    { id: 114, exits: [1,1,0,1,1,0], terrain: TerrainType.FOREST, native: NativeType.WOLVES, castle: false, },
    { id: 115, exits: [1,1,1,1,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.ANTS, castle: false, },
    { id: 116, exits: [1,1,1,1,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.ANTS, castle: false, },
    { id: 117, exits: [1,1,1,1,0,0], terrain: TerrainType.CANYON, native: NativeType.ORCS, castle: false, },
    { id: 118, exits: [1,1,0,1,1,0], terrain: TerrainType.HILLS, native: NativeType.ORCS, castle: false, },
    { id: 119, exits: [1,0,1,0,1,0], terrain: TerrainType.MOUNTAINS, native: NativeType.OGRES, castle: false, },
    { id: 120, exits: [1,1,0,1,0,0], terrain: TerrainType.MOUNTAINS, native: NativeType.DRAGONS, castle: false, },
    { id: 121, exits: [1,1,1,1,1,1], terrain: null, native: null, castle: true, },
    { id: 122, exits: [1,1,1,1,1,1], terrain: null, native: null, castle: true, },
    { id: 123, exits: [1,1,1,1,1,1], terrain: null, native: null, castle: true, },
    { id: 124, exits: [1,1,1,1,1,1], terrain: null, native: null, castle: true, },
    { id: 125, exits: [1,1,1,1,1,1], terrain: null, native: null, castle: true, },
    { id: 126, exits: [1,1,1,1,1,1], terrain: null, native: null, castle: true, },
].map((h) => { 
    if (h.terrain == null) return h;
    return {...h, bonuses: DEFAULT_TERRAIN_BONUS[h.terrain]}
});