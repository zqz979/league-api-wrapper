import type {AxiosInstance} from 'axios';
import axios from 'axios';
import {
  PLATFORM_ROUTES,
  REGION_ROUTES,
  type Platform,
  type Region,
} from '../constants/index.js';
import type {ClientConfig} from './types.js';

class BaseClient {
  protected readonly httpClient: AxiosInstance;

  constructor(config: ClientConfig) {
    this.httpClient = axios.create({
      headers: {
        'X-Riot-Token': config.apiKey,
      },
    });
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
