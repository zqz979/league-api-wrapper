import {type Platform} from '../../constants/index.js';
import {BaseClient} from '../base-client.js';
import type {Queue} from '../league/index.js';
import type {ClientConfig} from '../types.js';
import {ENTRIES} from './constants.js';
import type {LeagueEntryDTOExtended} from './types.js';

class LeagueExpClient extends BaseClient {
  constructor(config: ClientConfig) {
    super(config);
  }

  async getLeagueEntries(
    platform: Platform,
    queue: Queue,
    tier: string,
    division: string,
    page: number = 1,
  ): Promise<LeagueEntryDTOExtended[]> {
    try {
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
    } catch (error) {
      console.error('Error fetching league entries:', error);
      throw error;
    }
  }
}

export {LeagueExpClient};
