interface ClientConfig {
  apiKey: string;
}

interface RiotId {
  gameName: string;
  tagLine: string;
}

interface GameMode {
  gameMode: string;
  description: string;
}

interface GameMap {
  mapId: number;
  mapName: string;
  notes: string;
}

interface GameQueue {
  queueId: number;
  map: string;
  description: string;
  notes: string;
}

interface GameType {
  gameType: string;
  description: string;
}

export type {ClientConfig, RiotId, GameMode, GameMap, GameQueue, GameType};
