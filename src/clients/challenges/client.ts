import {Platform} from '../constants.js';
import {BaseClient} from '../base-client.js';
import {ClientConfig} from '../types.js';
import {CHALLENGES, CONFIG, PERCENTILES, PLAYER_DATA} from './constants.js';
import {
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
    const response = await this.httpClient.get<ChallengePercentileData>(
      PERCENTILES,
      {
        baseURL: this.getBaseURL(platform),
      },
    );
    return response.data;
  }

  async getChallengeLeaderboard(
    platform: Platform,
    challengeId: string,
    level: ChallengeLevel,
    limit?: number,
  ): Promise<ApexPlayerInfoDto[]> {
    const response = await this.httpClient.get<ApexPlayerInfoDto[]>(
      `${CHALLENGES}/${challengeId}/leaderboards/by-level/${level}`,
      {
        baseURL: this.getBaseURL(platform),
        params: {limit},
      },
    );
    return response.data;
  }

  async getChallengeConfigByChallengeId(
    platform: Platform,
    challengeId: string,
  ): Promise<ChallengeConfigInfoDto> {
    const response = await this.httpClient.get<ChallengeConfigInfoDto>(
      `${CHALLENGES}/${challengeId}/config`,
      {
        baseURL: this.getBaseURL(platform),
      },
    );
    return response.data;
  }

  async getChallengesForPlayer(
    platform: Platform,
    puuid: string,
  ): Promise<PlayerInfoDto[]> {
    const response = await this.httpClient.get<PlayerInfoDto[]>(
      `${PLAYER_DATA}/${puuid}`,
      {
        baseURL: this.getBaseURL(platform),
      },
    );
    return response.data;
  }

  async getChallengeConfigs(
    platform: Platform,
  ): Promise<ChallengeConfigInfoDtoExtended[]> {
    const response = await this.httpClient.get<
      ChallengeConfigInfoDtoExtended[]
    >(CONFIG, {
      baseURL: this.getBaseURL(platform),
    });
    return response.data;
  }
}

export {ChallengeClient};
