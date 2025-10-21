import {AxiosInstance, AxiosRequestConfig} from 'axios';
import axios from 'axios';
import pLimit from 'p-limit';
import {PLATFORM_ROUTES, REGION_ROUTES} from './constants.js';
import {ClientConfig, Platform, Region} from './types.js';
import {RiotApiError} from './errors.js';

/**
 * Sleep utility
 */
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class BaseClient {
  protected readonly httpClient: AxiosInstance;
  private readonly rateLimiter: ReturnType<typeof pLimit>;
  private readonly requestTimestamps: number[] = [];
  private readonly config: ClientConfig;

  constructor(config: ClientConfig) {
    this.config = config;

    // Set default rate limits
    const requestsPerSecond = config.rateLimit?.requestsPerSecond ?? 20;

    // Use the more restrictive limit for concurrent requests
    // If 20 req/sec, allow up to 10 concurrent (to leave headroom)
    const maxConcurrent = Math.min(Math.floor(requestsPerSecond / 2), 10);

    this.rateLimiter = pLimit(maxConcurrent);

    this.httpClient = axios.create({
      headers: {
        'X-Riot-Token': config.apiKey,
      },
    });

    // Add request interceptor to enforce rate limits
    this.httpClient.interceptors.request.use(async config => {
      await this.waitForRateLimit();
      this.recordRequest();
      return config;
    });

    this.httpClient.interceptors.response.use(
      response => response,
      async error => {
        if (error.response) {
          // Handle 429 rate limit errors with retry
          if (error.response.status === 429) {
            const retryAfter = error.response.headers['retry-after'];
            const maxRetries = this.config.rateLimit?.maxRetries ?? 3;
            const retryCount =
              (error.config as {__retryCount?: number}).__retryCount ?? 0;

            if (retryCount < maxRetries) {
              const delay = retryAfter
                ? parseInt(retryAfter) * 1000
                : this.getRetryDelay(retryCount);

              await sleep(delay);

              error.config.__retryCount = retryCount + 1;
              return this.httpClient.request(error.config);
            }
          }

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

  /**
   * Wait if we're about to exceed rate limits
   */
  private async waitForRateLimit(): Promise<void> {
    const now = Date.now();
    const requestsPerSecond = this.config.rateLimit?.requestsPerSecond ?? 20;
    const requestsPer2Minutes =
      this.config.rateLimit?.requestsPer2Minutes ?? 100;

    // Clean up old timestamps (older than 2 minutes)
    const twoMinutesAgo = now - 120000;
    while (
      this.requestTimestamps.length > 0 &&
      this.requestTimestamps[0]! < twoMinutesAgo
    ) {
      this.requestTimestamps.shift();
    }

    // Check 2-minute window
    if (this.requestTimestamps.length >= requestsPer2Minutes) {
      const oldestTimestamp = this.requestTimestamps[0]!;
      const waitTime = 120000 - (now - oldestTimestamp) + 100; // +100ms buffer
      if (waitTime > 0) {
        await sleep(waitTime);
      }
    }

    // Check per-second window
    const oneSecondAgo = now - 1000;
    const recentRequests = this.requestTimestamps.filter(
      ts => ts > oneSecondAgo,
    ).length;

    if (recentRequests >= requestsPerSecond) {
      const oldestRecentTimestamp = this.requestTimestamps.find(
        ts => ts > oneSecondAgo,
      )!;
      const waitTime = 1000 - (now - oldestRecentTimestamp) + 50; // +50ms buffer
      if (waitTime > 0) {
        await sleep(waitTime);
      }
    }
  }

  /**
   * Record a request timestamp for rate limiting
   */
  private recordRequest(): void {
    this.requestTimestamps.push(Date.now());
  }

  /**
   * Calculate exponential backoff delay for retries
   */
  private getRetryDelay(retryCount: number): number {
    const baseDelay = this.config.rateLimit?.retryDelayMs ?? 1000;
    return baseDelay * Math.pow(2, retryCount);
  }

  /**
   * Make a rate-limited HTTP request
   */
  protected async request<T>(config: AxiosRequestConfig): Promise<T> {
    return this.rateLimiter(async () => {
      const response = await this.httpClient.request<T>(config);
      return response.data;
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
