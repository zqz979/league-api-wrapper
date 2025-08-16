interface BannedChampion {
  pickTurn: number;
  championId: number;
  teamId: number;
}

interface Observer {
  encryptionKey: string;
}

interface Perks {
  perkIds: number[];
  perkStyle: number;
  perkSubStyle: number;
}

interface GameCustomizationObject {
  category: string;
  content: string;
}

interface CurrentGameParticipant {
  championId: number;
  perks: Perks;
  profileIconId: number;
  bot: boolean;
  teamId: number;
  puuid: string;
  spell1Id: number;
  spell2Id: number;
  gameCustomizationObjects: GameCustomizationObject[];
}

interface CurrentGameInfo {
  gameId: number;
  gameType: string;
  gameStartTime: number;
  mapId: number;
  gameLength: number;
  platformId: number;
  gameMode: string;
  bannedChampions: BannedChampion[];
  gameQueueConfigId: number;
  observers: Observer;
  participants: CurrentGameParticipant;
}

interface Participant {
  bot: boolean;
  spell2Id: number;
  profileIconId: number;
  puuid: string;
  championId: number;
  teamId: number;
  spell1Id: number;
}

interface FeaturedGameInfo {
  gameMode: string;
  gameLength: number;
  mapId: number;
  gameType: string;
  bannedChampions: BannedChampion[];
  gameId: number;
  observers: Observer;
  gameQueueConfigId: number;
  participants: Participant[];
  platformId: string;
}

interface FeaturedGames {
  gameList: FeaturedGameInfo[];
  clientRefreshInterval: number;
}

export type {
  CurrentGameInfo,
  BannedChampion,
  Observer,
  Perks,
  GameCustomizationObject,
  CurrentGameParticipant,
  Participant,
  FeaturedGameInfo,
  FeaturedGames,
};
