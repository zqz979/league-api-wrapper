import {Platform} from '../constants.js';
import {BaseClient} from '../base-client.js';
import {ClientConfig} from '../types.js';
import {PLATFORM_DATA} from './constants.js';
import {PlatformDataDto} from './types.js';

/**
 * Client to interact with the Riot Games Status API.
 */
class StatusClient extends BaseClient {
  constructor(config: ClientConfig) {
    super(config);
  }

  async getStatusByPlatform(platform: Platform): Promise<PlatformDataDto[]> {
    const response = await this.httpClient.get<PlatformDataDto[]>(
      PLATFORM_DATA,
      {
        baseURL: this.getBaseURL(platform),
      },
    );
    return response.data;
  }
}

export {StatusClient};
