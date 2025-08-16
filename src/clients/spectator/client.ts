import {type Platform} from '../../constants/index.js';
import {BaseClient} from '../base-client.js';
import type {ClientConfig} from '../types.js';
import {ACTIVE_GAMES_BY_SUMMONER, FEATURED_GAMES} from './constants.js';
import type {CurrentGameInfo, FeaturedGames} from './types.js';

class SpectatorClient extends BaseClient {
  constructor(config: ClientConfig) {
    super(config);
  }

  async getFeaturedGames(platform: Platform): Promise<FeaturedGames> {
    try {
      const response = await this.httpClient.get<FeaturedGames>(
        FEATURED_GAMES,
        {
          baseURL: this.getBaseURL(platform),
        },
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching featured games:', error);
      throw error;
    }
  }

  async getActiveGameByPUUID(
    platform: Platform,
    encryptedPUUID: string,
  ): Promise<CurrentGameInfo> {
    try {
      const response = await this.httpClient.get<CurrentGameInfo>(
        ACTIVE_GAMES_BY_SUMMONER + `/${encryptedPUUID}`,
        {
          baseURL: this.getBaseURL(platform),
        },
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching champion rotation:', error);
      throw error;
    }
  }
}

export {SpectatorClient};
