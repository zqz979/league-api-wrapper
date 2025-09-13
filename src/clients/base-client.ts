import {AxiosInstance} from 'axios';
import axios from 'axios';
import {PLATFORM_ROUTES, REGION_ROUTES} from './constants.js';
import {ClientConfig, Platform, Region} from './types.js';
import {RiotApiError} from './errors.js';

class BaseClient {
  protected readonly httpClient: AxiosInstance;

  constructor(config: ClientConfig) {
    this.httpClient = axios.create({
      headers: {
        'X-Riot-Token': config.apiKey,
      },
    });

    this.httpClient.interceptors.response.use(
      response => response,
      error => {
        if (error.response) {
          throw new RiotApiError(
            error.response.status,
            error.response.data,
            error.message,
          );
        }
        throw error;
      },
    );
  }

  protected getBaseURL(route: Region | Platform): string {
    let baseURL: string;
    if (route in REGION_ROUTES) {
      baseURL = `https://${REGION_ROUTES[route as Region]}`;
    } else {
      baseURL = `https://${PLATFORM_ROUTES[route as Platform]}`;
    }
    return baseURL;
  }
}

export {BaseClient};
