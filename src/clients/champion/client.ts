import {BaseClient} from '../base-client.js';
import {ClientConfig, Platform} from '../types.js';
import {CHAMPION_ROTATIONS} from './constants.js';
import {ChampionInfo} from './types.js';

/**
 * Client for accessing Riot Games champion-related endpoints.
 * @see {@link https://developer.riotgames.com/apis#champion-v3}
 */
class ChampionClient extends BaseClient {
  constructor(config: ClientConfig) {
    super(config);
  }

  /**
   * Get champion rotations
   *
   * @param platform - The platform to query.
   * @returns A promise that resolves to a ChampionInfo containing champion rotations, including free-to-play and low-level free-to-play rotations
   *
   * @see {@link https://developer.riotgames.com/apis#champion-v3/GET_getChampionInfo}
   */
  async getChampionRotations(platform: Platform): Promise<ChampionInfo> {
    const response = await this.httpClient.get<ChampionInfo>(
      CHAMPION_ROTATIONS,
      {
        baseURL: this.getBaseURL(platform),
      },
    );
    return response.data;
  }
}

export {ChampionClient};
