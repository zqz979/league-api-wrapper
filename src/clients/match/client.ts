import type { Region } from '../../constants/index.js'
import { BaseClient } from '../base-client.js'
import type { ClientConfig } from '../types.js'
import { MATCHES } from './constants.js'
import type { MatchDto, TimelineDto } from './types.js'

class MatchClient extends BaseClient {
    constructor(config: ClientConfig) {
        super(config)
    }

    async getMatchByMatchId(
        region: Region,
        matchId: string
    ): Promise<MatchDto> {
        try {
            const response = await this.httpClient.get<MatchDto>(
                `${MATCHES}/${matchId}`,
                {
                    baseURL: this.getBaseURL(region),
                }
            )
            return response.data
        } catch (error) {
            console.error('Error fetching league entries:', error)
            throw error
        }
    }

    async getMatchIdsByPUUID(
        region: Region,
        puuid: string,
        startTime?: number,
        endTime?: number,
        queue?: number,
        type?: string,
        start?: number,
        count?: number
    ): Promise<string[]> {
        try {
            const response = await this.httpClient.get<string[]>(
                `${MATCHES}/${puuid}/ids`,
                {
                    baseURL: this.getBaseURL(region),
                    params: { startTime, endTime, queue, type, start, count },
                }
            )
            return response.data
        } catch (error) {
            console.error('Error fetching match IDs by PUUID:', error)
            throw error
        }
    }

    async getMatchTimelineByMatchId(
        region: Region,
        matchId: string
    ): Promise<TimelineDto> {
        try {
            const response = await this.httpClient.get<TimelineDto>(
                `${MATCHES}/${matchId}/timeline`,
                {
                    baseURL: this.getBaseURL(region),
                }
            )
            return response.data
        } catch (error) {
            console.error('Error fetching match timeline:', error)
            throw error
        }
    }
}

export { MatchClient }
