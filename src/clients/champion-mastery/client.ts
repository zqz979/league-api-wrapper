import {type Platform} from '../../constants/index.js';
import {BaseClient} from '../base-client.js';
import type {ClientConfig} from '../types.js';
import {CHAMPION_MASTERIES_BY_PUUID, SCORES_BY_PUUID} from './constants.js';
import type {ChampionMasteryDto} from './types.js';

class ChampionMasteryClient extends BaseClient {
  constructor(config: ClientConfig) {
    super(config);
  }

  async getChampionMasteriesByPUUID(
    platform: Platform,
    puuid: string,
  ): Promise<ChampionMasteryDto[]> {
    try {
      const response = await this.httpClient.get<ChampionMasteryDto[]>(
        `${CHAMPION_MASTERIES_BY_PUUID}/${puuid}`,
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

  async getChampionMasteryByPUUID(
    platform: Platform,
    encryptedPUUID: string,
    championId: string,
  ): Promise<ChampionMasteryDto> {
    try {
      const response = await this.httpClient.get<ChampionMasteryDto>(
        `${CHAMPION_MASTERIES_BY_PUUID}/${encryptedPUUID}/by-champion/${championId}`,
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

  async getChampionMasteryScoreByPUUID(
    platform: Platform,
    encryptedPUUID: string,
  ): Promise<number> {
    try {
      const response = await this.httpClient.get<number>(
        `${SCORES_BY_PUUID}/${encryptedPUUID}`,
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

  async getTopChampionMasteriesByUUID(
    platform: Platform,
    encryptedPUUID: string,
    count?: number,
  ): Promise<ChampionMasteryDto[]> {
    try {
      const response = await this.httpClient.get<ChampionMasteryDto[]>(
        `$CHAMPION_MASTERIES_BY_PUUID}/${encryptedPUUID}/top`,
        {
          baseURL: this.getBaseURL(platform),
          params: {count},
        },
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching champion rotation:', error);
      throw error;
    }
  }
}

export {ChampionMasteryClient};
