import {Platform} from '../constants.js';
import {BaseClient} from '../base-client.js';
import {ENTRIES} from './constants.js';
import {Division, Queue, Tier} from '../league/types.js';
import {LeagueEntryDTOExtended} from './types.js';
import {ClientConfig} from '../types.js';

/**
 * Client for the League Exp API.
 */
/**
 * Client for accessing Riot Games League Exp endpoints.
 * @see {@link https://developer.riotgames.com/apis#league-exp-v4}
 */
class LeagueExpClient extends BaseClient {
  /**
   * Creates a new LeagueExpClient instance.
   * @param config - Configuration object containing API key and other options.
   */
  constructor(config: ClientConfig) {
    super(config);
  }

  /**
   * Retrieves all league entries for a given platform, queue, tier, division, and page.
   *
   * @param platform - The platform to query (e.g., NA, EUW, KR).
   * @param queue - The queue type (e.g., RANKED_SOLO_5x5).
   * @param tier - The tier (e.g., DIAMOND, PLATINUM).
   * @param division - The division (e.g., I, II, III, IV).
   * @param page - The page number for paginated results (default: 1).
   * @returns A promise that resolves to an array of LeagueEntryDTOExtended objects.
   *
   * @see {@link https://developer.riotgames.com/apis#league-exp-v4/GET_getLeagueEntries}
   */
  async getLeagueEntries(
    platform: Platform,
    queue: Queue,
    tier: Tier,
    division: Division,
    page: number = 1,
  ): Promise<LeagueEntryDTOExtended[]> {
    const response = await this.httpClient.get<LeagueEntryDTOExtended[]>(
      `${ENTRIES}/${queue}/${tier}/${division}`,
      {
        baseURL: this.getBaseURL(platform),
        params: {
          page,
        },
      },
    );
    return response.data;
  }
}

export {LeagueExpClient};
