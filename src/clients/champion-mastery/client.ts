import {BaseClient} from '../base-client.js';
import {ClientConfig, Platform} from '../types.js';
import {CHAMPION_MASTERIES_BY_PUUID, SCORES_BY_PUUID} from './constants.js';
import {ChampionMasteryDto} from './types.js';

/**
 * Client for accessing Riot Games champion mastery-related endpoints.
 * @see {@link https://developer.riotgames.com/apis#champion-mastery-v4}
 */
class ChampionMasteryClient extends BaseClient {
  constructor(config: ClientConfig) {
    super(config);
  }

  async getChampionMasteriesByPuuid(
    platform: Platform,
    puuid: string,
  ): Promise<ChampionMasteryDto[]> {
    const response = await this.httpClient.get<ChampionMasteryDto[]>(
      `${CHAMPION_MASTERIES_BY_PUUID}/${puuid}`,
      {
        baseURL: this.getBaseURL(platform),
      },
    );
    return response.data;
  }

  async getChampionMasteryByPuuid(
    platform: Platform,
    encryptedPUUID: string,
    championId: string,
  ): Promise<ChampionMasteryDto> {
    const response = await this.httpClient.get<ChampionMasteryDto>(
      `${CHAMPION_MASTERIES_BY_PUUID}/${encryptedPUUID}/by-champion/${championId}`,
      {
        baseURL: this.getBaseURL(platform),
      },
    );
    return response.data;
  }

  async getChampionMasteryScoreByPuuid(
    platform: Platform,
    encryptedPUUID: string,
  ): Promise<number> {
    const response = await this.httpClient.get<number>(
      `${SCORES_BY_PUUID}/${encryptedPUUID}`,
      {
        baseURL: this.getBaseURL(platform),
      },
    );
    return response.data;
  }

  async getTopChampionMasteriesByUUID(
    platform: Platform,
    encryptedPUUID: string,
    count?: number,
  ): Promise<ChampionMasteryDto[]> {
    const response = await this.httpClient.get<ChampionMasteryDto[]>(
      `${CHAMPION_MASTERIES_BY_PUUID}/${encryptedPUUID}/top`,
      {
        baseURL: this.getBaseURL(platform),
        params: {count},
      },
    );
    return response.data;
  }
}

export {ChampionMasteryClient};
