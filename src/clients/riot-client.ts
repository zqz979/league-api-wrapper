import {AccountClient} from './account/client.js';
import {BaseClient} from './base-client.js';
import {ChallengeClient} from './challenges/client.js';
import {ChampionMasteryClient} from './champion-mastery/client.js';
import {ChampionClient} from './champion/client.js';
import {ClashClient} from './clash/client.js';
import {LeagueExpClient} from './league-exp/client.js';
import {LeagueClient} from './league/client.js';
import {MatchClient} from './match/client.js';
import {MatchDto} from './match/types.js';
import {SpectatorClient} from './spectator/client.js';
import {StatusClient} from './status/client.js';
import {SummonerClient} from './summoner/client.js';
import {
  ClientConfig,
  GameMap,
  GameMode,
  GameQueue,
  GameType,
  Region,
  RiotId,
} from './types.js';

class RiotClient extends BaseClient {
  champion: ChampionClient;
  summoner: SummonerClient;
  league: LeagueClient;
  leagueExp: LeagueExpClient;
  clash: ClashClient;
  account: AccountClient;
  status: StatusClient;
  match: MatchClient;
  challenge: ChallengeClient;
  championMastery: ChampionMasteryClient;
  spectator: SpectatorClient;

  constructor(config: ClientConfig) {
    super(config);
    this.champion = new ChampionClient(config);
    this.summoner = new SummonerClient(config);
    this.league = new LeagueClient(config);
    this.leagueExp = new LeagueExpClient(config);
    this.clash = new ClashClient(config);
    this.account = new AccountClient(config);
    this.status = new StatusClient(config);
    this.match = new MatchClient(config);
    this.challenge = new ChallengeClient(config);
    this.championMastery = new ChampionMasteryClient(config);
    this.spectator = new SpectatorClient(config);
  }

  async getGameModes(): Promise<GameMode[]> {
    const response = await this.httpClient.get<GameMode[]>(
      'https://static.developer.riotgames.com/docs/lol/gameModes.json',
    );
    return response.data;
  }

  async getGameMaps(): Promise<GameMap[]> {
    const response = await this.httpClient.get<GameMap[]>(
      'https://static.developer.riotgames.com/docs/lol/maps.json',
    );
    return response.data;
  }

  async getGameQueues(): Promise<GameQueue[]> {
    const response = await this.httpClient.get<GameQueue[]>(
      'https://static.developer.riotgames.com/docs/lol/queues.json',
    );
    return response.data;
  }

  async getGameTypes(): Promise<GameType[]> {
    const response = await this.httpClient.get<GameType[]>(
      'https://static.developer.riotgames.com/docs/lol/gameTypes.json',
    );
    return response.data;
  }

  private async _getDataDragonVersions(): Promise<string[]> {
    const response = await this.httpClient.get<string[]>(
      'https://ddragon.leagueoflegends.com/api/versions.json',
    );
    return response.data;
  }

  async getMatchHistory(
    region: Region,
    riotId?: RiotId,
    puuid?: string,
  ): Promise<MatchDto[]> {
    if (!puuid) {
      const {gameName, tagLine} = riotId || {};
      if (gameName && tagLine) {
        const accountDto = await this.account.getAccountByRiotId(
          region,
          gameName,
          tagLine,
        );
        puuid = accountDto.puuid;
      } else {
        throw new Error(
          'Either puuid or both gameName and tagLine must be provided',
        );
      }
    }
    const matchIds = await this.match.getMatchIdsByPuuid(
      region,
      puuid,
      undefined,
      undefined,
      undefined,
      undefined,
      0,
      5,
    );
    return Promise.all(
      matchIds.map(matchId => this.match.getMatchByMatchId(region, matchId)),
    );
  }
}

export {RiotClient};
