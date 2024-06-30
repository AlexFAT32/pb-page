import { BattleResultResponse, PlayerWithStats } from '@game/shared';
import {
  adjectives,
  animals,
  uniqueNamesGenerator,
} from 'unique-names-generator';

export const battleResultResponse: BattleResultResponse = {
  battle: {
    id: 1,
    teamWinnerName: 'Winner Team',
    teamLoserName: 'Loser Team',
  },
  losers: generatePlayers(),
  winners: generatePlayers(),
};

function generatePlayers(): PlayerWithStats[] {
  return Array.from({ length: 50 }, () => ({
    id: Math.floor(Math.random() * 10000),
    name: uniqueNamesGenerator({
      dictionaries: [adjectives, animals],
      separator: ' ',
      style: 'capital',
    }),
    score: Math.floor(Math.random() * 10),
    isAlive: Math.random() < 0.5,
    totalKills: Math.floor(Math.random() * 100),
    totalDeaths: Math.floor(Math.random() * 100),
  }));
}
