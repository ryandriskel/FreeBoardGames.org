import RoomCard from './RoomCard';

export default {
  title: 'RoomCard',
};

const ChessThumbnail = require('../../../games/chess/media/thumbnail.jpg');

export const empty = () => <RoomCard gameImageURL={ChessThumbnail} gameName="Chess" capacity={2} players={[]} />;
export const full = () => (
  <RoomCard gameImageURL={ChessThumbnail} gameName="Chess" capacity={2} players={['Charmander', 'Chimchar']} />
);
export const namesOverflow = () => (
  <RoomCard gameImageURL={ChessThumbnail} gameName="Chess" capacity={3} players={['Monkey', 'Fox', 'Wolf']} />
);
