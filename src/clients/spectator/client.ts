import {Platform} from '../constants.js';
import {BaseClient} from '../base-client.js';
import {ClientConfig} from '../types.js';
import {ACTIVE_GAMES_BY_SUMMONER, FEATURED_GAMES} from './constants.js';
import {CurrentGameInfo, FeaturedGames} from './types.js';

/**
 * Client for accessing Riot Games spectator-related endpoints.
 * @see {@link https://developer.riotgames.com/apis#spectator-v4}
 */
class SpectatorClient extends BaseClient {
  constructor(config: ClientConfig) {
    super(config);
  }

  async getFeaturedGames(platform: Platform): Promise<FeaturedGames> {
    const response = await this.httpClient.get<FeaturedGames>(FEATURED_GAMES, {
      baseURL: this.getBaseURL(platform),
    });
    return response.data;
  }

  async getActiveGameByPuuid(
    platform: Platform,
    encryptedPUUID: string,
  ): Promise<CurrentGameInfo> {
    const response = await this.httpClient.get<CurrentGameInfo>(
      ACTIVE_GAMES_BY_SUMMONER + `/${encryptedPUUID}`,
      {
        baseURL: this.getBaseURL(platform),
      },
    );
    return response.data;
  }
}

export {SpectatorClient};
