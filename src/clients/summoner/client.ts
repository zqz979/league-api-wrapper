import {type Platform} from '../../constants/index.js';
import {BaseClient} from '../base-client.js';
import type {ClientConfig} from '../types.js';
import {SOMMONER_BY_PUUID} from './constants.js';
import type {SummonerDTO} from './types.js';

class SummonerClient extends BaseClient {
  constructor(config: ClientConfig) {
    super(config);
  }

  async getSummonerByEncryptedPUUID(
    platform: Platform,
    encryptedPUUID: string,
  ): Promise<SummonerDTO> {
    try {
      const response = await this.httpClient.get<SummonerDTO>(
        `${SOMMONER_BY_PUUID}/${encryptedPUUID}`,
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

export {SummonerClient};
