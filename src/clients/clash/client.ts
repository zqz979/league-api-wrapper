import {type Platform} from '../../constants/index.js';
import {BaseClient} from '../base-client.js';
import type {ClientConfig} from '../types.js';
import {
  PLAYERS_BY_PUUID,
  TEAMS,
  TOURNAMENTS,
  TOURNAMENTS_BY_TEAM_ID,
} from './constants.js';
import type {PlayerDtoExtended, TeamDto, TournamentDto} from './types.js';

class ClashClient extends BaseClient {
  constructor(config: ClientConfig) {
    super(config);
  }

  async getTeamById(platform: Platform, teamId: string): Promise<TeamDto> {
    try {
      const response = await this.httpClient.get<TeamDto>(
        `${TEAMS}/${teamId}`,
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

  async getTornamentById(
    platform: Platform,
    tournamentId: string,
  ): Promise<TournamentDto[]> {
    try {
      const response = await this.httpClient.get<TournamentDto[]>(
        `${TOURNAMENTS}/${tournamentId}`,
        {
          baseURL: this.getBaseURL(platform),
        },
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching tournament by ID:', error);
      throw error;
    }
  }

  async getTournamentByTeamId(
    platform: Platform,
    teamId: string,
  ): Promise<TournamentDto[]> {
    try {
      const response = await this.httpClient.get<TournamentDto[]>(
        `${TOURNAMENTS_BY_TEAM_ID}/${teamId}`,
        {
          baseURL: this.getBaseURL(platform),
        },
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching tournament by ID:', error);
      throw error;
    }
  }

  async getAllTournaments(platform: Platform): Promise<TournamentDto[]> {
    try {
      const response = await this.httpClient.get<TournamentDto[]>(TOURNAMENTS, {
        baseURL: this.getBaseURL(platform),
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching all tournaments:', error);
      throw error;
    }
  }

  async getPlayerByPUUID(
    platform: Platform,
    puuid: string,
  ): Promise<PlayerDtoExtended[]> {
    try {
      const response = await this.httpClient.get<PlayerDtoExtended[]>(
        `${PLAYERS_BY_PUUID}/${puuid}`,
        {
          baseURL: this.getBaseURL(platform),
        },
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching player by PUUID:', error);
      throw error;
    }
  }
}

export {ClashClient};
