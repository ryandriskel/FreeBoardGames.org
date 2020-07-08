import IBonus, { BonusType } from './equipment';
import { IUnit } from './unit';

export enum TerrainType {
    CANYON = "canyon",
    FOREST = "forest",
    GRASSLAND = "grassland",
    HILLS = "hills",
    PLAINS = "plains",
    MOUNTAINS = "mountains",
    WETLANDS = "wetlands",
}

export enum NativeType {
    ANTS = "ants",
    DRAGONS = "dragons",
    OGRES = "ogres",
    ORCS = "orcs",
    WOLVES = "wolves",
}

export interface IHexTile {
    id: number,
    minPlayers: number;
    ring: number;
    exits: number[];
    bonuses?: IBonus[];
    terrain?: string;
    native?: string;
    castle?: boolean;
}

export interface IMapTile {
    hextile: IHexTile;
    rotation: number;
    units?: IUnit[];
    ownership?: number;
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
DEFAULT_TERRAIN_BONUS[TerrainType.WETLANDS] = [{kind: BonusType.MPOW, value: -1},{kind: BonusType.RPOW, value: -1}];
DEFAULT_TERRAIN_BONUS[TerrainType.PLAINS] = [];
DEFAULT_TERRAIN_BONUS[TerrainType.CANYON] = [{kind: BonusType.RPOW, value: 1}];
DEFAULT_TERRAIN_BONUS[TerrainType.FOREST] = [];
DEFAULT_TERRAIN_BONUS[TerrainType.GRASSLAND] = [{kind: BonusType.MPOW, value: 1}];
DEFAULT_TERRAIN_BONUS[TerrainType.HILLS] = [{kind: BonusType.RPOW, value: 1}];
DEFAULT_TERRAIN_BONUS[TerrainType.MOUNTAINS] = [{kind: BonusType.MPOW, value: 1},{kind: BonusType.RPOW, value: 1}];

export const NullTile = { id: null, minPlayers: 0, ring: 0, exits: [], terrain: null, native: null, castle: null, };

export const DEFAULT_HEX_DATA = [
    { id: 0, minPlayers: 0, ring: 0, exits: [1,1,1,1,1,1], terrain: null, native: null, castle: true, },
    { id: 1, minPlayers: 2, ring: 1, exits: [1,0,1,0,1,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 2, minPlayers: 2, ring: 1, exits: [1,1,0,1,0,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 3, minPlayers: 2, ring: 1, exits: [1,1,0,1,0,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 4, minPlayers: 2, ring: 1, exits: [1,1,0,0,1,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 5, minPlayers: 2, ring: 1, exits: [1,1,0,0,1,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 6, minPlayers: 2, ring: 1, exits: [1,1,1,0,1,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 7, minPlayers: 2, ring: 1, exits: [1,1,1,0,1,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 8, minPlayers: 2, ring: 1, exits: [1,1,0,1,1,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 9, minPlayers: 2, ring: 2, exits: [1,1,0,1,1,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 10, minPlayers: 2, ring: 1, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: null, castle: false, },
    { id: 11, minPlayers: 2, ring: 1, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: null, castle: false, },
    { id: 12, minPlayers: 2, ring: 2, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: null, castle: false, },
    { id: 13, minPlayers: 2, ring: 2, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: null, castle: false, },
    { id: 14, minPlayers: 2, ring: 2, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: null, castle: false, },
    { id: 15, minPlayers: 2, ring: 2, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: NativeType.WOLVES, castle: false, },
    { id: 16, minPlayers: 2, ring: 2, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: NativeType.WOLVES, castle: false, },
    { id: 17, minPlayers: 2, ring: 1, exits: [1,1,1,1,1,0], terrain: TerrainType.FOREST, native: null, castle: false, },
    { id: 18, minPlayers: 2, ring: 1, exits: [1,1,1,1,1,0], terrain: TerrainType.FOREST, native: null, castle: false, },
    { id: 19, minPlayers: 2, ring: 2, exits: [1,1,1,1,1,0], terrain: TerrainType.FOREST, native: null, castle: false, },
    { id: 20, minPlayers: 2, ring: 2, exits: [1,1,1,0,1,0], terrain: TerrainType.FOREST, native: NativeType.WOLVES, castle: false, },
    { id: 21, minPlayers: 2, ring: 2, exits: [1,1,0,1,1,0], terrain: TerrainType.FOREST, native: null, castle: false, },
    { id: 22, minPlayers: 2, ring: 2, exits: [1,1,0,1,1,0], terrain: TerrainType.FOREST, native: NativeType.WOLVES, castle: false, },
    { id: 23, minPlayers: 2, ring: 2, exits: [1,1,1,1,0,0], terrain: TerrainType.FOREST, native: NativeType.WOLVES, castle: false, },
    { id: 24, minPlayers: 2, ring: 2, exits: [1,1,1,1,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.ANTS, castle: false, },
    { id: 25, minPlayers: 2, ring: 2, exits: [1,1,1,1,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.ANTS, castle: false, },
    { id: 26, minPlayers: 2, ring: 2, exits: [1,1,1,1,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.ANTS, castle: false, },
    { id: 27, minPlayers: 2, ring: 2, exits: [1,1,1,1,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.ANTS, castle: false, },
    { id: 28, minPlayers: 2, ring: 2, exits: [1,1,1,0,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.ORCS, castle: false, },
    { id: 29, minPlayers: 2, ring: 3, exits: [1,1,0,1,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.ORCS, castle: false, },
    { id: 30, minPlayers: 2, ring: 3, exits: [1,1,0,1,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.OGRES, castle: false, },
    { id: 31, minPlayers: 2, ring: 2, exits: [1,1,1,1,0,0], terrain: TerrainType.CANYON, native: NativeType.ORCS, castle: false, },
    { id: 32, minPlayers: 2, ring: 2, exits: [1,1,0,1,0,0], terrain: TerrainType.CANYON, native: NativeType.ORCS, castle: false, },
    { id: 33, minPlayers: 2, ring: 2, exits: [1,1,0,0,1,0], terrain: TerrainType.CANYON, native: NativeType.ORCS, castle: false, },
    { id: 34, minPlayers: 2, ring: 3, exits: [1,1,1,1,0,0], terrain: TerrainType.CANYON, native: NativeType.ORCS, castle: false, },
    { id: 35, minPlayers: 2, ring: 2, exits: [1,1,1,0,1,0], terrain: TerrainType.CANYON, native: NativeType.ANTS, castle: false, },
    { id: 36, minPlayers: 2, ring: 3, exits: [1,1,0,1,1,0], terrain: TerrainType.CANYON, native: NativeType.ANTS, castle: false, },
    { id: 37, minPlayers: 2, ring: 3, exits: [1,1,1,0,0,0], terrain: TerrainType.CANYON, native: NativeType.DRAGONS, castle: false, },
    { id: 38, minPlayers: 2, ring: 3, exits: [1,1,0,1,1,0], terrain: TerrainType.HILLS, native: NativeType.ORCS, castle: false, },
    { id: 39, minPlayers: 2, ring: 3, exits: [1,1,1,0,1,0], terrain: TerrainType.HILLS, native: NativeType.OGRES, castle: false, },
    { id: 40, minPlayers: 2, ring: 3, exits: [1,1,1,1,0,0], terrain: TerrainType.HILLS, native: NativeType.OGRES, castle: false, },
    { id: 41, minPlayers: 2, ring: 3, exits: [1,0,1,0,1,0], terrain: TerrainType.HILLS, native: NativeType.OGRES, castle: false, },
    { id: 42, minPlayers: 2, ring: 3, exits: [1,1,0,0,1,0], terrain: TerrainType.HILLS, native: NativeType.DRAGONS, castle: false, },
    { id: 43, minPlayers: 2, ring: 3, exits: [1,1,0,1,0,0], terrain: TerrainType.HILLS, native: NativeType.DRAGONS, castle: false, },
    { id: 44, minPlayers: 2, ring: 3, exits: [1,0,1,0,1,0], terrain: TerrainType.MOUNTAINS, native: NativeType.OGRES, castle: false, },
    { id: 45, minPlayers: 2, ring: 3, exits: [1,1,0,1,0,0], terrain: TerrainType.MOUNTAINS, native: NativeType.OGRES, castle: false, },
    { id: 46, minPlayers: 2, ring: 3, exits: [1,1,0,0,1,0], terrain: TerrainType.MOUNTAINS, native: NativeType.OGRES, castle: false, },
    { id: 47, minPlayers: 2, ring: 3, exits: [1,0,1,0,1,0], terrain: TerrainType.MOUNTAINS, native: NativeType.DRAGONS, castle: false, },
    { id: 48, minPlayers: 2, ring: 3, exits: [1,1,0,1,0,0], terrain: TerrainType.MOUNTAINS, native: NativeType.DRAGONS, castle: false, },
    { id: 49, minPlayers: 2, ring: 3, exits: [1,1,0,0,1,0], terrain: TerrainType.MOUNTAINS, native: NativeType.DRAGONS, castle: false, },
    { id: 50, minPlayers: 2, ring: 3, exits: [1,1,1,0,0,0], terrain: TerrainType.MOUNTAINS, native: NativeType.DRAGONS, castle: false, },
    { id: 51, minPlayers: 3, ring: 1, exits: [1,0,1,0,1,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 52, minPlayers: 3, ring: 1, exits: [1,1,1,1,0,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 53, minPlayers: 3, ring: 2, exits: [1,1,0,1,1,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 54, minPlayers: 3, ring: 2, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: null, castle: false, },
    { id: 55, minPlayers: 3, ring: 2, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: null, castle: false, },
    { id: 56, minPlayers: 3, ring: 2, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: NativeType.WOLVES, castle: false, },
    { id: 57, minPlayers: 3, ring: 3, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: NativeType.WOLVES, castle: false, },
    { id: 58, minPlayers: 3, ring: 3, exits: [1,1,1,1,1,0], terrain: TerrainType.FOREST, native: NativeType.WOLVES, castle: false, },
    { id: 59, minPlayers: 3, ring: 2, exits: [1,1,1,0,1,0], terrain: TerrainType.FOREST, native: null, castle: false, },
    { id: 60, minPlayers: 3, ring: 3, exits: [1,1,1,1,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.ANTS, castle: false, },
    { id: 61, minPlayers: 3, ring: 3, exits: [1,1,1,1,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.ANTS, castle: false, },
    { id: 62, minPlayers: 3, ring: 3, exits: [1,1,0,1,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.ORCS, castle: false, },
    { id: 63, minPlayers: 3, ring: 3, exits: [1,0,1,0,1,0], terrain: TerrainType.CANYON, native: NativeType.ORCS, castle: false, },
    { id: 64, minPlayers: 3, ring: 2, exits: [1,1,0,1,1,0], terrain: TerrainType.CANYON, native: NativeType.ANTS, castle: false, },
    { id: 65, minPlayers: 3, ring: 3, exits: [1,1,0,1,1,0], terrain: TerrainType.HILLS, native: NativeType.ORCS, castle: false, },
    { id: 66, minPlayers: 3, ring: 3, exits: [1,1,1,0,1,0], terrain: TerrainType.HILLS, native: NativeType.OGRES, castle: false, },
    { id: 67, minPlayers: 3, ring: 3, exits: [1,1,1,0,0,0], terrain: TerrainType.HILLS, native: NativeType.DRAGONS, castle: false, },
    { id: 68, minPlayers: 3, ring: 3, exits: [1,0,1,0,1,0], terrain: TerrainType.MOUNTAINS, native: NativeType.OGRES, castle: false, },
    { id: 69, minPlayers: 3, ring: 3, exits: [1,0,1,0,1,0], terrain: TerrainType.MOUNTAINS, native: NativeType.OGRES, castle: false, },
    { id: 70, minPlayers: 3, ring: 3, exits: [1,1,0,1,0,0], terrain: TerrainType.MOUNTAINS, native: NativeType.DRAGONS, castle: false, },
    { id: 71, minPlayers: 4, ring: 2, exits: [1,0,1,0,1,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 72, minPlayers: 4, ring: 2, exits: [1,1,0,1,0,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 73, minPlayers: 4, ring: 2, exits: [1,1,0,0,1,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 74, minPlayers: 4, ring: 2, exits: [1,1,1,0,1,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 75, minPlayers: 4, ring: 1, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: null, castle: false, },
    { id: 76, minPlayers: 4, ring: 3, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: null, castle: false, },
    { id: 77, minPlayers: 4, ring: 3, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: NativeType.WOLVES, castle: false, },
    { id: 78, minPlayers: 4, ring: 1, exits: [1,1,1,1,1,0], terrain: TerrainType.FOREST, native: null, castle: false, },
    { id: 79, minPlayers: 4, ring: 3, exits: [1,1,1,0,1,0], terrain: TerrainType.FOREST, native: null, castle: false, },
    { id: 80, minPlayers: 4, ring: 2, exits: [1,1,1,1,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.ANTS, castle: false, },
    { id: 81, minPlayers: 4, ring: 3, exits: [1,1,1,1,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.ANTS, castle: false, },
    { id: 82, minPlayers: 4, ring: 2, exits: [1,1,1,0,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.ORCS, castle: false, },
    { id: 83, minPlayers: 4, ring: 3, exits: [1,1,1,0,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.OGRES, castle: false, },
    { id: 84, minPlayers: 4, ring: 3, exits: [1,1,0,1,0,0], terrain: TerrainType.CANYON, native: NativeType.ORCS, castle: false, },
    { id: 85, minPlayers: 4, ring: 3, exits: [1,0,1,0,1,0], terrain: TerrainType.CANYON, native: NativeType.DRAGONS, castle: false, },
    { id: 86, minPlayers: 4, ring: 3, exits: [1,1,1,1,0,0], terrain: TerrainType.HILLS, native: NativeType.OGRES, castle: false, },
    { id: 87, minPlayers: 4, ring: 3, exits: [1,0,1,0,1,0], terrain: TerrainType.HILLS, native: NativeType.DRAGONS, castle: false, },
    { id: 88, minPlayers: 4, ring: 3, exits: [1,0,1,0,1,0], terrain: TerrainType.MOUNTAINS, native: NativeType.OGRES, castle: false, },
    { id: 89, minPlayers: 4, ring: 3, exits: [1,1,0,0,1,0], terrain: TerrainType.MOUNTAINS, native: NativeType.DRAGONS, castle: false, },
    { id: 90, minPlayers: 5, ring: 3, exits: [1,1,1,0,0,0], terrain: TerrainType.MOUNTAINS, native: NativeType.DRAGONS, castle: false, },
    { id: 91, minPlayers: 5, ring: 1, exits: [1,1,1,1,0,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 92, minPlayers: 5, ring: 1, exits: [1,1,1,0,1,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 93, minPlayers: 5, ring: 2, exits: [1,1,0,1,1,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 94, minPlayers: 5, ring: 3, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: null, castle: false, },
    { id: 95, minPlayers: 5, ring: 3, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: null, castle: false, },
    { id: 96, minPlayers: 5, ring: 3, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: null, castle: false, },
    { id: 97, minPlayers: 5, ring: 3, exits: [1,1,1,1,1,0], terrain: TerrainType.FOREST, native: null, castle: false, },
    { id: 98, minPlayers: 5, ring: 3, exits: [1,1,1,0,1,0], terrain: TerrainType.FOREST, native: NativeType.WOLVES, castle: false, },
    { id: 99, minPlayers: 5, ring: 3, exits: [1,1,0,1,1,0], terrain: TerrainType.FOREST, native: null, castle: false, },
    { id: 100, minPlayers: 5, ring: 2, exits: [1,1,1,1,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.ANTS, castle: false, },
    { id: 101, minPlayers: 5, ring: 2, exits: [1,1,0,1,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.ORCS, castle: false, },
    { id: 102, minPlayers: 5, ring: 2, exits: [1,1,0,0,1,0], terrain: TerrainType.CANYON, native: NativeType.ORCS, castle: false, },
    { id: 103, minPlayers: 5, ring: 2, exits: [1,1,0,1,1,0], terrain: TerrainType.CANYON, native: NativeType.ORCS, castle: false, },
    { id: 104, minPlayers: 5, ring: 2, exits: [1,1,1,0,1,0], terrain: TerrainType.CANYON, native: NativeType.ANTS, castle: false, },
    { id: 105, minPlayers: 5, ring: 3, exits: [1,1,1,0,1,0], terrain: TerrainType.HILLS, native: NativeType.OGRES, castle: false, },
    { id: 106, minPlayers: 5, ring: 3, exits: [1,1,0,0,1,0], terrain: TerrainType.HILLS, native: NativeType.DRAGONS, castle: false, },
    { id: 107, minPlayers: 5, ring: 3, exits: [1,1,0,1,0,0], terrain: TerrainType.HILLS, native: NativeType.DRAGONS, castle: false, },
    { id: 108, minPlayers: 5, ring: 3, exits: [1,1,0,1,0,0], terrain: TerrainType.MOUNTAINS, native: NativeType.OGRES, castle: false, },
    { id: 109, minPlayers: 5, ring: 3, exits: [1,1,0,0,1,0], terrain: TerrainType.MOUNTAINS, native: NativeType.OGRES, castle: false, },
    { id: 110, minPlayers: 5, ring: 3, exits: [1,1,0,0,1,0], terrain: TerrainType.MOUNTAINS, native: NativeType.DRAGONS, castle: false, },
    { id: 111, minPlayers: 6, ring: 2, exits: [1,1,1,0,1,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 112, minPlayers: 6, ring: 2, exits: [1,1,0,1,1,0], terrain: TerrainType.WETLANDS, native: null, castle: false, },
    { id: 113, minPlayers: 6, ring: 3, exits: [1,1,1,1,1,0], terrain: TerrainType.PLAINS, native: NativeType.WOLVES, castle: false, },
    { id: 114, minPlayers: 6, ring: 3, exits: [1,1,0,1,1,0], terrain: TerrainType.FOREST, native: NativeType.WOLVES, castle: false, },
    { id: 115, minPlayers: 6, ring: 3, exits: [1,1,1,1,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.ANTS, castle: false, },
    { id: 116, minPlayers: 6, ring: 3, exits: [1,1,1,1,1,0], terrain: TerrainType.GRASSLAND, native: NativeType.ANTS, castle: false, },
    { id: 117, minPlayers: 6, ring: 3, exits: [1,1,1,1,0,0], terrain: TerrainType.CANYON, native: NativeType.ORCS, castle: false, },
    { id: 118, minPlayers: 6, ring: 3, exits: [1,1,0,1,1,0], terrain: TerrainType.HILLS, native: NativeType.ORCS, castle: false, },
    { id: 119, minPlayers: 6, ring: 3, exits: [1,0,1,0,1,0], terrain: TerrainType.MOUNTAINS, native: NativeType.OGRES, castle: false, },
    { id: 120, minPlayers: 6, ring: 3, exits: [1,1,0,1,0,0], terrain: TerrainType.MOUNTAINS, native: NativeType.DRAGONS, castle: false, },
    { id: 121, minPlayers: 1, ring: 3, exits: [1,1,1,1,1,1], terrain: null, native: null, castle: true, },
    { id: 122, minPlayers: 1, ring: 3, exits: [1,1,1,1,1,1], terrain: null, native: null, castle: true, },
    { id: 123, minPlayers: 1, ring: 3, exits: [1,1,1,1,1,1], terrain: null, native: null, castle: true, },
    { id: 124, minPlayers: 1, ring: 3, exits: [1,1,1,1,1,1], terrain: null, native: null, castle: true, },
    { id: 125, minPlayers: 1, ring: 3, exits: [1,1,1,1,1,1], terrain: null, native: null, castle: true, },
    { id: 126, minPlayers: 1, ring: 3, exits: [1,1,1,1,1,1], terrain: null, native: null, castle: true, },
].map((h) => { 
    if (h.terrain == null) return h;
    return {...h, bonuses: DEFAULT_TERRAIN_BONUS[h.terrain]}
});