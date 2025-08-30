import {Platform} from '../constants.js';
import {BaseClient} from '../base-client.js';
import {ClientConfig} from '../types.js';
import {
  PLAYERS_BY_PUUID,
  TEAMS,
  TOURNAMENTS,
  TOURNAMENTS_BY_TEAM_ID,
} from './constants.js';
import {PlayerDtoExtended, TeamDto, TournamentDto} from './types.js';

/**
 * Client for accessing Riot Games Clash-related endpoints.
 * @see {@link https://developer.riotgames.com/apis#clash-v1}
 */
class ClashClient extends BaseClient {
  constructor(config: ClientConfig) {
    super(config);
  }

  async getTeamById(platform: Platform, teamId: string): Promise<TeamDto> {
    const response = await this.httpClient.get<TeamDto>(`${TEAMS}/${teamId}`, {
      baseURL: this.getBaseURL(platform),
    });
    return response.data;
  }

  async getTornamentById(
    platform: Platform,
    tournamentId: string,
  ): Promise<TournamentDto[]> {
    const response = await this.httpClient.get<TournamentDto[]>(
      `${TOURNAMENTS}/${tournamentId}`,
      {
        baseURL: this.getBaseURL(platform),
      },
    );
    return response.data;
  }

  async getTournamentByTeamId(
    platform: Platform,
    teamId: string,
  ): Promise<TournamentDto[]> {
    const response = await this.httpClient.get<TournamentDto[]>(
      `${TOURNAMENTS_BY_TEAM_ID}/${teamId}`,
      {
        baseURL: this.getBaseURL(platform),
      },
    );
    return response.data;
  }

  async getAllTournaments(platform: Platform): Promise<TournamentDto[]> {
    const response = await this.httpClient.get<TournamentDto[]>(TOURNAMENTS, {
      baseURL: this.getBaseURL(platform),
    });
    return response.data;
  }

  async getPlayerByPuuid(
    platform: Platform,
    puuid: string,
  ): Promise<PlayerDtoExtended[]> {
    const response = await this.httpClient.get<PlayerDtoExtended[]>(
      `${PLAYERS_BY_PUUID}/${puuid}`,
      {
        baseURL: this.getBaseURL(platform),
      },
    );
    return response.data;
  }
}

export {ClashClient};
