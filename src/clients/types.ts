import {PLATFORM_ROUTES, REGION_ROUTES} from './constants.js';

interface RateLimitConfig {
  /**
   * Maximum number of requests per second.
   * @default 20
   */
  requestsPerSecond?: number;

  /**
   * Maximum number of requests per 2 minutes (120 seconds).
   * @default 100
   */
  requestsPer2Minutes?: number;

  /**
   * Number of retry attempts for rate limit errors (429).
   * @default 3
   */
  maxRetries?: number;

  /**
   * Base delay in milliseconds for exponential backoff on retries.
   * @default 1000
   */
  retryDelayMs?: number;
}

interface ClientConfig {
  apiKey: string;

  /**
   * Rate limit configuration for API requests.
   * If not provided, uses Riot's default limits for development API keys:
   * - 20 requests per second
   * - 100 requests per 2 minutes
   */
  rateLimit?: RateLimitConfig;
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
  RateLimitConfig,
  RiotId,
  GameMode,
  GameMap,
  GameQueue,
  GameType,
  Platform,
  Region,
};
