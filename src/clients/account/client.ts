import {Region} from '../../constants/index.js';
import {BaseClient} from '../base-client.js';
import type {ClientConfig} from '../types.js';
import {BY_PUUID, BY_RIOT_ID, ACTIVE_REGION} from './constants.js';
import type {AccountDto, AccountRegionDTO} from './types.js';

class AccountClient extends BaseClient {
  constructor(config: ClientConfig) {
    super(config);
  }

  async getAccountByRiotId(
    region: Region,
    gameName: string,
    tagLine: string,
  ): Promise<AccountDto> {
    try {
      const response = await this.httpClient.get<AccountDto>(
        `${BY_RIOT_ID}/${gameName}/${tagLine}`,
        {
          baseURL: this.getBaseURL(region),
        },
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching account by Riot ID: ${error}`);
      throw error;
    }
  }

  async getAccountByPUUID(region: Region, puuid: string): Promise<AccountDto> {
    try {
      const response = await this.httpClient.get<AccountDto>(
        `${BY_PUUID}/${puuid}`,
        {
          baseURL: this.getBaseURL(region),
        },
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching account by PUUID: ${error}`);
      throw error;
    }
  }

  async getActiveRegionByGame(
    region: Region,
    game: string,
    puuid: string,
  ): Promise<AccountRegionDTO> {
    try {
      const response = await this.httpClient.get<AccountRegionDTO>(
        `${ACTIVE_REGION}/${game}/by-puuid/${puuid}`,
        {
          baseURL: this.getBaseURL(region),
        },
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching account by PUUID: ${error}`);
      throw error;
    }
  }
}

export {AccountClient};
