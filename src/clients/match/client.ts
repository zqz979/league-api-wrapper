import {BaseClient} from '../base-client.js';
import {ClientConfig, Region} from '../types.js';
import {MATCHES} from './constants.js';
import {MatchDto, TimelineDto} from './types.js';

/**
 * Client for accessing Riot Games match-related endpoints.
 * @see {@link https://developer.riotgames.com/apis#match-v5}
 */
class MatchClient extends BaseClient {
  constructor(config: ClientConfig) {
    super(config);
  }

  async getMatchByMatchId(region: Region, matchId: string): Promise<MatchDto> {
    const response = await this.httpClient.get<MatchDto>(
      `${MATCHES}/${matchId}`,
      {
        baseURL: this.getBaseURL(region),
      },
    );
    return response.data;
  }

  async getMatchIdsByPuuid(
    region: Region,
    puuid: string,
    startTime?: number,
    endTime?: number,
    queue?: number,
    type?: string,
    start?: number,
    count?: number,
  ): Promise<string[]> {
    const response = await this.httpClient.get<string[]>(
      `${MATCHES}/by-puuid/${puuid}/ids`,
      {
        baseURL: this.getBaseURL(region),
        params: {startTime, endTime, queue, type, start, count},
      },
    );
    return response.data;
  }

  async getMatchTimelineByMatchId(
    region: Region,
    matchId: string,
  ): Promise<TimelineDto> {
    const response = await this.httpClient.get<TimelineDto>(
      `${MATCHES}/${matchId}/timeline`,
      {
        baseURL: this.getBaseURL(region),
      },
    );
    return response.data;
  }
}

export {MatchClient};
