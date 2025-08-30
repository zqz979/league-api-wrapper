type Tier =
  | 'IRON'
  | 'BRONZE'
  | 'SILVER'
  | 'GOLD'
  | 'PLATINUM'
  | 'EMERALD'
  | 'DIAMOND';
type Division = 'I' | 'II' | 'III' | 'IV';
type Queue = 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT';

interface MiniSeriesDTO {
  losses: number;
  progress: string;
  target: number;
  wins: number;
}

interface LeagueItemDTO {
  freshBlood: boolean;
  wins: number;
  miniSeries: MiniSeriesDTO;
  inactive: boolean;
  veteran: boolean;
  hotStreak: boolean;
  rank: string;
  leaguePoints: number;
  losses: number;
  puuid: string;
}

interface LeagueListDTO {
  leagueId: string;
  entries: LeagueItemDTO[];
  tier: Tier;
  name: string;
  queue: string;
}

interface MiniSeriesDTO {
  losses: number;
  progress: string;
  target: number;
  wins: number;
}

interface LeagueEntryDTO {
  leagueId: string;
  puuid: string;
  queueType: string;
  tier: Tier;
  rank: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  hotStreak: boolean;
  veteran: boolean;
  freshBlood: boolean;
  inactive: boolean;
  miniSeries: MiniSeriesDTO;
}

export type {
  LeagueItemDTO,
  LeagueListDTO,
  MiniSeriesDTO,
  LeagueEntryDTO,
  Queue,
  Tier,
  Division,
};
