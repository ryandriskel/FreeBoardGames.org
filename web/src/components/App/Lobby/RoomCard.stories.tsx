import RoomCard, { GameDataProps } from './RoomCard';

export default {
  component: RoomCard,
  title: 'RoomCard',
};

const ChessThumbnail = require('../../../games/chess/media/thumbnail.jpg');

const gameData: GameDataProps = { imageURL: ChessThumbnail, name: 'Chess' };
export const empty = () => <RoomCard gameData={gameData} capacity={2} players={[]} />;
export const full = () => <RoomCard gameData={gameData} capacity={2} players={['Charmander', 'Chimchar']} />;
export const namesOverflow = () => <RoomCard gameData={gameData} capacity={3} players={['Monkey', 'Fox', 'Wolf']} />;
