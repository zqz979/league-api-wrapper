import {BaseClient} from '../base-client.js';
import {ClientConfig, Platform} from '../types.js';
import {SOMMONER_BY_PUUID} from './constants.js';
import {SummonerDTO} from './types.js';

/**
 * Client for accessing Riot Games summoner-related endpoints.
 * @see {@link https://developer.riotgames.com/apis#summoner-v4}
 */
class SummonerClient extends BaseClient {
  constructor(config: ClientConfig) {
    super(config);
  }

  /**
   * Get a summoner by PUUID.
   *
   * @param platform - The platform to query.
   * @param encryptedPUUID - Encrypted PUUID. Exact length of 78 characters.
   * @returns A promise that resolves to a SummonerDTO containing summoner details.
   *
   * @see {@link https://developer.riotgames.com/apis#summoner-v4/GET_getByPuuid}
   */
  async getSummonerByEncryptedPUUID(
    platform: Platform,
    encryptedPUUID: string,
  ): Promise<SummonerDTO> {
    const response = await this.httpClient.get<SummonerDTO>(
      `${SOMMONER_BY_PUUID}/${encryptedPUUID}`,
      {
        baseURL: this.getBaseURL(platform),
      },
    );
    return response.data;
  }
}

export {SummonerClient};
