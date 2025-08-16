import { type Platform } from '../../constants/index.js'
import { BaseClient } from '../base-client.js'
import type { ClientConfig } from '../types.js'
import { CHAMPION_ROTATIONS } from './constants.js'
import type { ChampionInfo } from './types.js'

class ChampionClient extends BaseClient {
    constructor(config: ClientConfig) {
        super(config)
    }

    async getChampionRotations(platform: Platform): Promise<ChampionInfo> {
        try {
            const response = await this.httpClient.get<ChampionInfo>(
                CHAMPION_ROTATIONS,
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
}

export { ChampionClient }
