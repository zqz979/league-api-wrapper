import { AccountClient } from './account/client.js'
import { ChallengeClient } from './challenges/client.js'
import { ChampionMasteryClient } from './champion-mastery/client.js'
import { ChampionClient } from './champion/client.js'
import { ClashClient } from './clash/client.js'
import { LeagueExpClient } from './league-exp/client.js'
import { LeagueClient } from './league/client.js'
import { MatchClient } from './match/client.js'
import { SpectatorClient } from './spectator/client.js'
import { StatusClient } from './status/client.js'
import { SummonerClient } from './summoner/client.js'
import type { ClientConfig } from './types.js'

class RiotClient {
    champion: ChampionClient
    summoner: SummonerClient
    league: LeagueClient
    leagueExp: LeagueExpClient
    clash: ClashClient
    account: AccountClient
    status: StatusClient
    match: MatchClient
    challenge: ChallengeClient
    championMastery: ChampionMasteryClient
    spectator: SpectatorClient

    constructor(config: ClientConfig) {
        this.champion = new ChampionClient(config)
        this.summoner = new SummonerClient(config)
        this.league = new LeagueClient(config)
        this.leagueExp = new LeagueExpClient(config)
        this.clash = new ClashClient(config)
        this.account = new AccountClient(config)
        this.status = new StatusClient(config)
        this.match = new MatchClient(config)
        this.challenge = new ChallengeClient(config)
        this.championMastery = new ChampionMasteryClient(config)
        this.spectator = new SpectatorClient(config)
    }
}

export { RiotClient }
