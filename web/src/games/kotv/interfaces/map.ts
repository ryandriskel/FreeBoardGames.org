import { DEFAULT_HEX_DATA } from "./hextile";

export const DEFAULT_MAP = {
    "-2": {
        "-1": {
            hextile: { ...DEFAULT_HEX_DATA[43] },
            rotation: 0,
        },
        0: {
            hextile: { ...DEFAULT_HEX_DATA[53] },
            rotation: 0,
        },
        1: {
            hextile: { ...DEFAULT_HEX_DATA[63] },
            rotation: 0,
        },
    },
    "-1": {
        "-1": {
            hextile: { ...DEFAULT_HEX_DATA[42] },
            rotation: 0,
        },
        0: {
            hextile: { ...DEFAULT_HEX_DATA[41] },
            rotation: 0,
        },
        1: {
            hextile: { ...DEFAULT_HEX_DATA[51] },
            rotation: 0,
        },
    },
    0: {
        "-2": {
            hextile: { ...DEFAULT_HEX_DATA[12] },
            rotation: 0,
        },
        "-1": {
            hextile: { ...DEFAULT_HEX_DATA[1] },
            rotation: 0,
        },
        0: {
            hextile: { ...DEFAULT_HEX_DATA[0] },
            rotation: 0,
        },
        1: {
            hextile: { ...DEFAULT_HEX_DATA[11] },
            rotation: 0,
        },
        2: {
            hextile: { ...DEFAULT_HEX_DATA[2] },
            rotation: 0,
        },
    },
    1: {
        "-1": {
            hextile: { ...DEFAULT_HEX_DATA[32] },
            rotation: 0,
        },
        0: {
            hextile: { ...DEFAULT_HEX_DATA[21] },
            rotation: 0,
        },
        1: {
            hextile: { ...DEFAULT_HEX_DATA[31] },
            rotation: 0,
        },
    },
    2: {
        "-1": {
            hextile: { ...DEFAULT_HEX_DATA[3] },
            rotation: 0,
        },
        0: {
            hextile: { ...DEFAULT_HEX_DATA[4] },
            rotation: 0,
        },
        1: {
            hextile: { ...DEFAULT_HEX_DATA[5] },
            rotation: 0,
        },
    },
}

export const DEFAULT_PLAYER_POSITIONS = [
    [
        { row: "-1", column: "-3"}
    ],
    [
        { row: "-1", column: "-3"},
        { row: "2", column: "3"},
    ],
    [
        { row: "-1", column: "-3"},
        { row: "-1", column: "3"},
        { row: "3", column: "0"},
    ],
    [
        { row: "-1", column: "-3"},
        { row: "-1", column: "3"},
        { row: "2", column: "-3"},
        { row: "2", column: "3"},
    ],
    [
        { row: "-1", column: "-3"},
        { row: "-1", column: "3"},
        { row: "2", column: "-3"},
        { row: "2", column: "3"},
        { row: "3", column: "0"},
    ],
    [
        { row: "-3", column: "0"},
        { row: "-1", column: "-3"},
        { row: "-1", column: "3"},
        { row: "2", column: "-3"},
        { row: "2", column: "3"},
        { row: "3", column: "0"},
    ],
]