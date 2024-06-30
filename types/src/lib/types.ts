export type Battle = {
  id: number;
  teamWinnerName?: string;
  teamLoserName?: string;
};



export type Player = {
  id: number;
  name: string;
}

export type PlayerStats = {
  score: number;
  isAlive: boolean;
  totalKills: number | null
  totalDeaths: number | null
}

export type PlayerWithStats = Player & PlayerStats


export type BattleResultResponse = {
  battle: Battle;
  winners: PlayerWithStats[];
  losers: PlayerWithStats[];
}

