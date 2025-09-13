import {PLATFORM_ROUTES, REGION_ROUTES} from './constants.js';

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

type Platform = keyof typeof PLATFORM_ROUTES;
type Region = keyof typeof REGION_ROUTES;

export type {
  ClientConfig,
  RiotId,
  GameMode,
  GameMap,
  GameQueue,
  GameType,
  Platform,
  Region,
};
