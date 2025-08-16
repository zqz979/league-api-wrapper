import { type Platform } from '../../constants/index.js'
import { BaseClient } from '../base-client.js'
import type { ClientConfig } from '../types.js'
import {
    CHALLENGER_LEAGUES_BY_QUEUE,
    GRAND_MASTER_LEAGUES_BY_QUEUE,
    LEAGUES,
    ENTRIES,
    MASTER_LEAGUES_BY_QUEUE,
} from './constants.js'
import type { LeagueEntryDTO, LeagueListDTO, Queue } from './types.js'

class LeagueClient extends BaseClient {
    constructor(config: ClientConfig) {
        super(config)
    }

    async getChallengerLeagueByQueue(
        platform: Platform,
        queue: Queue
    ): Promise<LeagueListDTO> {
        try {
            const response = await this.httpClient.get<LeagueListDTO>(
                `${CHALLENGER_LEAGUES_BY_QUEUE}/${queue}`,
                {
                    baseURL: this.getBaseURL(platform),
                }
            )
            return response.data
        } catch (error) {
            console.error('Error fetching champion rotation:', error)
            throw error
        }
    }

    async getLeagueByLeagueId(
        platform: Platform,
        leagueId: string
    ): Promise<LeagueListDTO> {
        try {
            const response = await this.httpClient.get<LeagueListDTO>(
                `${LEAGUES}/${leagueId}`,
                {
                    baseURL: this.getBaseURL(platform),
                }
            )
            return response.data
        } catch (error) {
            console.error('Error fetching league by ID:', error)
            throw error
        }
    }

    async getMasterLeagueByQueue(
        platform: Platform,
        queue: Queue
    ): Promise<LeagueListDTO> {
        try {
            const response = await this.httpClient.get<LeagueListDTO>(
                `${MASTER_LEAGUES_BY_QUEUE}/${queue}`,
                {
                    baseURL: this.getBaseURL(platform),
                }
            )
            return response.data
        } catch (error) {
            console.error('Error fetching master league by queue:', error)
            throw error
        }
    }

    async getGrandmasterLeagueByQueue(
        platform: Platform,
        queue: Queue
    ): Promise<LeagueListDTO> {
        try {
            const response = await this.httpClient.get<LeagueListDTO>(
                `${GRAND_MASTER_LEAGUES_BY_QUEUE}/${queue}`,
                {
                    baseURL: this.getBaseURL(platform),
                }
            )
            return response.data
        } catch (error) {
            console.error('Error fetching grandmaster league by queue:', error)
            throw error
        }
    }

    async getLeagueEntries(
        platform: Platform,
        queue: Queue,
        tier: string,
        division: string
    ): Promise<LeagueEntryDTO[]> {
        try {
            const response = await this.httpClient.get<LeagueEntryDTO[]>(
                `${ENTRIES}/${queue}/${tier}/${division}`,
                {
                    baseURL: this.getBaseURL(platform),
                }
            )
            return response.data
        } catch (error) {
            console.error('Error fetching league entries:', error)
            throw error
        }
    }
}

export { LeagueClient }
