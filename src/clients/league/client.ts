import {BaseClient} from '../base-client.js';
import {ClientConfig, Platform} from '../types.js';

import {
  CHALLENGER_LEAGUES_BY_QUEUE,
  GRAND_MASTER_LEAGUES_BY_QUEUE,
  LEAGUES,
  ENTRIES,
  MASTER_LEAGUES_BY_QUEUE,
  ENTRIES_BY_PUUID,
} from './constants.js';
import {Division, LeagueEntryDTO, LeagueListDTO, Queue, Tier} from './types.js';

/**
 * Client for accessing Riot Games league-related endpoints.
 * @see {@link https://developer.riotgames.com/apis#league-v4}
 */
class LeagueClient extends BaseClient {
  constructor(config: ClientConfig) {
    super(config);
  }

  /**
   * Get the challenger league for given queue.
   *
   * @param platform - The platform to query.
   * @param queue - The queue to query.
   * @returns A promise that resolves to a LeagueListDTO containing challenger league details for the specified queue.
   *
   * @see {@link https://developer.riotgames.com/apis#league-v4/GET_getChallengerLeague}
   */
  async getChallengerLeagueByQueue(
    platform: Platform,
    queue: Queue,
  ): Promise<LeagueListDTO> {
    const response = await this.httpClient.get<LeagueListDTO>(
      `${CHALLENGER_LEAGUES_BY_QUEUE}/${queue}`,
      {
        baseURL: this.getBaseURL(platform),
      },
    );
    return response.data;
  }

  /**
   * Get league with given ID, including inactive entries.
   * @param platform - The platform to query.
   * @param leagueId - The UUID of the league.
   * @returns
   *
   * @see {@link https://developer.riotgames.com/apis#league-v4/GET_getLeagueById}
   */
  async getLeagueByLeagueId(
    platform: Platform,
    leagueId: string,
  ): Promise<LeagueListDTO> {
    const response = await this.httpClient.get<LeagueListDTO>(
      `${LEAGUES}/${leagueId}`,
      {
        baseURL: this.getBaseURL(platform),
      },
    );
    return response.data;
  }

  /**
   * Get the master league for given queue.
   * @param platform - The platform to query.
   * @param queue - The queue to query.
   * @returns
   *
   * @see {@link https://developer.riotgames.com/apis#league-v4/GET_getMasterLeague}
   */
  async getMasterLeagueByQueue(
    platform: Platform,
    queue: Queue,
  ): Promise<LeagueListDTO> {
    const response = await this.httpClient.get<LeagueListDTO>(
      `${MASTER_LEAGUES_BY_QUEUE}/${queue}`,
      {
        baseURL: this.getBaseURL(platform),
      },
    );
    return response.data;
  }

  /**
   * Get the grandmaster league of a specific queue.
   * @param platform
   * @param queue
   * @returns
   *
   * @see {@link https://developer.riotgames.com/apis#league-v4/GET_getGrandmasterLeague}
   */
  async getGrandmasterLeagueByQueue(
    platform: Platform,
    queue: Queue,
  ): Promise<LeagueListDTO> {
    const response = await this.httpClient.get<LeagueListDTO>(
      `${GRAND_MASTER_LEAGUES_BY_QUEUE}/${queue}`,
      {
        baseURL: this.getBaseURL(platform),
      },
    );
    return response.data;
  }

  /**
   * Get all the league entries.
   *
   * @param platform - The platform to query.
   * @param queue - The queue to query.
   * @param tier - The tier to query.
   * @param division - The division to query.
   * @returns A promise that resolves to an array of LeagueEntryDTO containing league entry details for the specified parameters.
   *
   * @see {@link https://developer.riotgames.com/apis#league-v4/GET_getLeagueEntries}
   */
  async getAllLeagueEntries(
    platform: Platform,
    queue: Queue,
    tier: Tier,
    division: Division,
  ): Promise<LeagueEntryDTO[]> {
    const response = await this.httpClient.get<LeagueEntryDTO[]>(
      `${ENTRIES}/${queue}/${tier}/${division}`,
      {
        baseURL: this.getBaseURL(platform),
      },
    );
    return response.data;
  }

  /** Get league entries in all queues for a given puuid
   * @param platform - The platform to query.
   * @param summonerId - The encrypted summoner ID.
   * @returns A promise that resolves to an array of LeagueEntryDTO containing league entry details for the specified summoner ID.
   *
   * @see {@link https://developer.riotgames.com/apis#league-v4/GET_getLeagueEntriesForSummoner}
   */
  async getLeagueEntriesByPuuid(
    platform: Platform,
    puuid: string,
  ): Promise<LeagueEntryDTO[]> {
    const response = await this.httpClient.get<LeagueEntryDTO[]>(
      `${ENTRIES_BY_PUUID}/${puuid}`,
      {
        baseURL: this.getBaseURL(platform),
      },
    );
    return response.data;
  }
}

export {LeagueClient};
