import { INVALID_MOVE, TurnOrder } from 'boardgame.io/core';
import { Ctx, Game } from 'boardgame.io';
import { IG, DEFAULT_STATE } from './interfaces/game';
import { Util } from './util';

export const Moves = {
    ChooseColor: function(G: IG, ctx: Ctx, color: string){
        
    },
    Explore: function(G: IG, ctx: Ctx){

    },
    Council: function(G: IG, ctx: Ctx){

    },
    Develop: function(G: IG, ctx: Ctx){

    },
    Upgrade: function(G: IG, ctx: Ctx){

    },
    Unit: function(G: IG, ctx: Ctx){

    },
    Recruit: function(G: IG, ctx: Ctx){

    },
    Reinforce: function(G: IG, ctx: Ctx){

    },
    Maneuver: function(G: IG, ctx: Ctx){

    },
    Attack: function(G: IG, ctx: Ctx){

    },
    Pillage: function(G: IG, ctx: Ctx){

    },
}

export const KotvGame: Game<IG> = {
    name: 'kotv',
    
    setup: () => DEFAULT_STATE,
    phases: {
      prepare: {
        start: true,
        turn: {
            moveLimit: 1,
            activePlayers: { all: 'color_selection' },
            stages: {
                color_selection: {
                    moves: {
                        MoveChooseColor: Moves.ChooseColor
                    },
                },
            },
        },
        next: 'play',
        endIf: Util.AllPlayersHaveChosenAColor,
      },
      play: {
        moves: {
            MoveExplore: Moves.Explore,
            MoveCouncil: Moves.Council,
            MoveDevelop: Moves.Develop,
            MoveUpgrade: Moves.Upgrade,
            MoveUnit: Moves.Unit,
        },
        turn: {
            order: TurnOrder.DEFAULT,
            moveLimit: 1,
            stages: {
                unit_recruit: {
                    moves: {
                        MoveRecruit: Moves.Recruit
                    },
                },
                unit_reinforce: {
                    moves: {
                        MoveReinforce: Moves.Reinforce
                    },
                },
                unit_maneuver: {
                    moves: {
                        MoveManeuver: Moves.Maneuver
                    },
                },
                unit_attack: {
                    moves: {
                        MoveAttack: Moves.Attack
                    },
                },
                unit_pillage: {
                    moves: {
                        MovePillage: Moves.Pillage
                    },
                },
            },
        },
      },
    },
    endIf: Util.Game.IsOver,
  };
  