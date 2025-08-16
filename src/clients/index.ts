// Main RiotClient
export { RiotClient } from './riot-client.js'

// Base client for extending
export { BaseClient } from './base-client.js'

// Individual clients for tree-shaking
export { AccountClient } from './account/index.js'
export { ChallengeClient } from './challenges/index.js'
export { ChampionClient } from './champion/index.js'
export { ChampionMasteryClient } from './champion-mastery/index.js'
export { ClashClient } from './clash/index.js'
export { LeagueClient } from './league/index.js'
export { LeagueExpClient } from './league-exp/index.js'
export { MatchClient } from './match/index.js'
export { SpectatorClient } from './spectator/index.js'
export { StatusClient } from './status/index.js'
export { SummonerClient } from './summoner/index.js'

// Re-export all types for convenience
export type * from './types.js'
export type * from './account/index.js'
export type * from './challenges/index.js'
export type * from './champion/index.js'
export type * from './champion-mastery/index.js'
export type * from './clash/index.js'
export type * from './league/index.js'
export type * from './league-exp/index.js'
export type * from './match/index.js'
export type * from './spectator/index.js'
export type * from './status/index.js'
export type * from './summoner/index.js'
