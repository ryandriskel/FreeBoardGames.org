import { IG } from './interfaces/game';
import { DEFAULT_PLAYER_POSITIONS } from './interfaces/map';
import { DEFAULT_HEX_DATA } from './interfaces/hextile';

export const Util = {
    AllPlayersHaveChosenAColor: function(G: IG){

    },
    ApplyPlayersToLayout: function(layout:any, playerCount:number){
        const playerPositions = DEFAULT_PLAYER_POSITIONS[playerCount-1];
        playerPositions.map((position, player)=>{
          if (!(position.column in layout)){
            layout[position.column] = [];
          }
          layout[position.column][position.row] = {
              hextile: { ...DEFAULT_HEX_DATA[121+player] },
              rotation: 0,
          }
        });
        return layout;
      },
    Game: {
        IsOver: function(G: IG){
            return false;
        },
    }
}