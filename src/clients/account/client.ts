import {Region} from '../constants.js';
import {BaseClient} from '../base-client.js';
import {BY_PUUID, BY_RIOT_ID, ACTIVE_REGION} from './constants.js';
import type {AccountDto, AccountRegionDTO} from './types.js';
import {ClientConfig} from '../types.js';

/**
 * Client for accessing Riot Games account-related endpoints.
 * @see {@link https://developer.riotgames.com/apis#account-v1}
 */
class AccountClient extends BaseClient {
  /**
   * Creates a new AccountClient instance.
   *
   * @param config - Configuration object containing API key and other options.
   */
  constructor(config: ClientConfig) {
    super(config);
  }

  /**
   * Get account by riot id
   *
   * @param region - The region to query.
   * @param gameName - The in-game name of the player.
   * @param tagLine - The tag line associated with the player's Riot ID.
   * @returns A promise that resolves to an AccountDto containing account details.
   *
   * @see {@link https://developer.riotgames.com/apis#account-v1/GET_getByRiotId}
   */
  async getAccountByRiotId(
    region: Region,
    gameName: string,
    tagLine: string,
  ): Promise<AccountDto> {
    const response = await this.httpClient.get<AccountDto>(
      `${BY_RIOT_ID}/${gameName}/${tagLine}`,
      {
        baseURL: this.getBaseURL(region),
      },
    );
    return response.data;
  }

  /**
   * Get account by puuid
   *
   * @param region - The region to query.
   * @param puuid - Encrypted PUUID. Exact length of 78 characters.
   * @returns A promise that resolves to an AccountDto containing account details.
   *
   * @see {@link https://developer.riotgames.com/apis#account-v1/GET_getByPuuid}
   */
  async getAccountByPuuid(region: Region, puuid: string): Promise<AccountDto> {
    const response = await this.httpClient.get<AccountDto>(
      `${BY_PUUID}/${puuid}`,
      {
        baseURL: this.getBaseURL(region),
      },
    );
    return response.data;
  }

  /**
   * Get active region (lol and tft)
   *
   * @param region - Player active region.
   * @param game - Game to lookup active region.
   * @param puuid - Player Universal Unique Identifier. Exact length of 78 characters. (Encrypted)
   * @returns A promise that resolves to an AccountRegionDTO containing the active region information.
   *
   * @see {@link https://developer.riotgames.com/apis#account-v1/GET_getActiveRegion}
   */
  async getActiveRegion(
    region: Region,
    game: string,
    puuid: string,
  ): Promise<AccountRegionDTO> {
    const response = await this.httpClient.get<AccountRegionDTO>(
      `${ACTIVE_REGION}/by-game/${game}/by-puuid/${puuid}`,
      {
        baseURL: this.getBaseURL(region),
      },
    );
    return response.data;
  }
}

export {AccountClient};
