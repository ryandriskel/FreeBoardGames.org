import IUnit from "./unit";
import IResource from "./development";

export enum ColorTypes {
    BLACK = "black",
    BLUE = "blue",
    GREEN = "green",
    RED = "red",
    WHITE = "white",
    YELLOW = "yellow",
}

export default interface IPlayer {
    color: string;
    passed: boolean;
    actions_taken: number;
    units: IUnit[];
    resources: IResource[];
    income: IResource[];
}