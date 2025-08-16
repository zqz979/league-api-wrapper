import type {Platform} from '../../constants/index.js';
import {BaseClient} from '../base-client.js';
import type {ClientConfig} from '../types.js';
import {PLATFORM_DATA} from './constants.js';
import type {PlatformDataDto} from './types.js';

class StatusClient extends BaseClient {
  constructor(config: ClientConfig) {
    super(config);
  }

  async getStatusByPlatform(platform: Platform): Promise<PlatformDataDto[]> {
    try {
      const response = await this.httpClient.get<PlatformDataDto[]>(
        PLATFORM_DATA,
        {
          baseURL: this.getBaseURL(platform),
        },
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching league entries:', error);
      throw error;
    }
  }
}

export {StatusClient};
