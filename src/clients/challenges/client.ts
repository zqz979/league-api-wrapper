import {Platform} from '../../constants/index.js';
import {BaseClient} from '../base-client.js';
import type {ClientConfig} from '../types.js';
import {CHALLENGES, CONFIG, PERCENTILES, PLAYER_DATA} from './constants.js';
import type {
  ApexPlayerInfoDto,
  ChallengeConfigInfoDto,
  ChallengeConfigInfoDtoExtended,
  ChallengeLevel,
  ChallengePercentileData,
  PlayerInfoDto,
} from './types.js';

class ChallengeClient extends BaseClient {
  constructor(config: ClientConfig) {
    super(config);
  }

  async getChallengePercentile(
    platform: Platform,
  ): Promise<ChallengePercentileData> {
    try {
      const response = await this.httpClient.get<ChallengePercentileData>(
        PERCENTILES,
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

  async getChallengeLeaderboard(
    platform: Platform,
    challengeId: string,
    level: ChallengeLevel,
    limit?: number,
  ): Promise<ApexPlayerInfoDto[]> {
    try {
      const response = await this.httpClient.get<ApexPlayerInfoDto[]>(
        `${CHALLENGES}/${challengeId}/leaderboards/by-level/${level}`,
        {
          baseURL: this.getBaseURL(platform),
          params: {limit},
        },
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching challenge leaderboard:', error);
      throw error;
    }
  }

  async getChallengeConfigByChallengeId(
    platform: Platform,
    challengeId: string,
  ): Promise<ChallengeConfigInfoDto> {
    try {
      const response = await this.httpClient.get<ChallengeConfigInfoDto>(
        `${CHALLENGES}/${challengeId}/config`,
        {
          baseURL: this.getBaseURL(platform),
        },
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching challenge config:', error);
      throw error;
    }
  }

  async getChallengesForPlayer(
    platform: Platform,
    puuid: string,
  ): Promise<PlayerInfoDto[]> {
    try {
      const response = await this.httpClient.get<PlayerInfoDto[]>(
        `${PLAYER_DATA}/${puuid}`,
        {
          baseURL: this.getBaseURL(platform),
        },
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching challenges for player:', error);
      throw error;
    }
  }

  async getChallengeConfigs(
    platform: Platform,
  ): Promise<ChallengeConfigInfoDtoExtended[]> {
    try {
      const response = await this.httpClient.get<
        ChallengeConfigInfoDtoExtended[]
      >(CONFIG, {
        baseURL: this.getBaseURL(platform),
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching challenge configs:', error);
      throw error;
    }
  }
}

export {ChallengeClient};
