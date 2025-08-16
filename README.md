# League API Wrapper

A comprehensive TypeScript wrapper for the Riot Games League of Legends API. This library provides type-safe access to all League of Legends API endpoints with a clean, modern interface.

## Features

- 🔒 **Type-safe** - Full TypeScript support with complete type definitions
- 🌍 **Multi-region support** - Works with all Riot Games regions and platforms
- 🧩 **Modular design** - Import only the clients you need
- 📦 **Tree-shakable** - Optimized bundle size with ES modules
- 🚀 **Modern** - Built with modern JavaScript/TypeScript best practices
- ⚡ **Axios-based** - Reliable HTTP client with proper error handling

## Installation

```bash
npm install @kevinzhu/league-api-wrapper
```

```bash
yarn add @kevinzhu/league-api-wrapper
```

```bash
pnpm add @kevinzhu/league-api-wrapper
```

```bash
bun add @kevinzhu/league-api-wrapper
```

## Prerequisites

You'll need a Riot Games API key to use this library. Get one from the [Riot Developer Portal](https://developer.riotgames.com/).

## Quick Start

### Basic Usage

```typescript
import { RiotClient } from '@kevinzhu/league-api-wrapper'

const client = new RiotClient({
    apiKey: 'YOUR_RIOT_API_KEY',
})

// Get summoner information
const summoner = await client.summoner.getSummonerByEncryptedPUUID(
    'NA1',
    'puuid'
)
console.log(summoner.name)

// Get match data
const match = await client.match.getMatchByMatchId('AMERICAS', 'match_id')
console.log(match.info.gameDuration)
```

### Modular Imports

You can import individual clients to reduce bundle size:

```typescript
import {
    SummonerClient,
    MatchClient,
} from '@kevinzhu/league-api-wrapper/clients'

const summonerClient = new SummonerClient({ apiKey: 'YOUR_API_KEY' })
const matchClient = new MatchClient({ apiKey: 'YOUR_API_KEY' })

// Or import specific clients directly
import { SummonerClient } from '@kevinzhu/league-api-wrapper/summoner'
import { MatchClient } from '@kevinzhu/league-api-wrapper/match'
```

## API Reference

### Available Clients

The library provides clients for all League of Legends API endpoints:

- **AccountClient** - Account information and cross-game data
- **SummonerClient** - Summoner profiles and basic information
- **ChampionClient** - Champion rotations and champion data
- **MatchClient** - Match history, match details, and timelines
- **LeagueClient** - Ranked league information
- **LeagueExpClient** - Experimental league endpoints
- **SpectatorClient** - Live game spectator data
- **ChampionMasteryClient** - Champion mastery scores and information
- **ChallengeClient** - Player challenges and achievements
- **ClashClient** - Clash tournament information
- **StatusClient** - Server status and maintenance information

### Regions and Platforms

#### Platforms (for most endpoints)

```typescript
type Platform =
    | 'BR1' // Brazil
    | 'EUN1' // Europe Nordic & East
    | 'EUW1' // Europe West
    | 'JP1' // Japan
    | 'KR' // Korea
    | 'LA1' // Latin America North
    | 'LA2' // Latin America South
    | 'NA1' // North America
    | 'OC1' // Oceania
    | 'TR1' // Turkey
    | 'RU' // Russia
    | 'PH2' // Philippines
    | 'SG2' // Singapore
    | 'TH2' // Thailand
    | 'TW2' // Taiwan
    | 'VN2' // Vietnam
```

#### Regions (for match and account endpoints)

```typescript
type Region =
    | 'AMERICAS' // North and South America
    | 'ASIA' // Asia Pacific
    | 'EUROPE' // Europe
    | 'SEA' // Southeast Asia
```

## Examples

### Getting Summoner Information

```typescript
import { RiotClient } from '@kevinzhu/league-api-wrapper'

const client = new RiotClient({ apiKey: 'YOUR_API_KEY' })

async function getSummonerInfo(puuid: string) {
    try {
        const summoner = await client.summoner.getSummonerByEncryptedPUUID(
            'NA1',
            puuid
        )

        console.log(`Summoner: ${summoner.name}`)
        console.log(`Level: ${summoner.summonerLevel}`)
        console.log(`Account ID: ${summoner.accountId}`)

        return summoner
    } catch (error) {
        console.error('Failed to fetch summoner:', error)
        throw error
    }
}
```

### Getting Match History

```typescript
async function getRecentMatches(puuid: string) {
    try {
        // Get recent match IDs
        const matchIds = await client.match.getMatchIdsByPUUID(
            'AMERICAS',
            puuid,
            undefined, // startTime
            undefined, // endTime
            undefined, // queue
            undefined, // type
            0, // start
            10 // count - get last 10 matches
        )

        // Get detailed match data
        const matches = await Promise.all(
            matchIds.map((matchId) =>
                client.match.getMatchByMatchId('AMERICAS', matchId)
            )
        )

        return matches
    } catch (error) {
        console.error('Failed to fetch matches:', error)
        throw error
    }
}
```

### Getting Live Game Information

```typescript
async function getLiveGame(summonerId: string) {
    try {
        const liveGame = await client.spectator.getCurrentGameInfoBySummonerId(
            'NA1',
            summonerId
        )

        console.log(`Game Mode: ${liveGame.gameMode}`)
        console.log(`Game Length: ${liveGame.gameLength}s`)
        console.log(`Participants: ${liveGame.participants.length}`)

        return liveGame
    } catch (error) {
        if (error.response?.status === 404) {
            console.log('Summoner is not currently in a game')
            return null
        }
        throw error
    }
}
```

### Getting Champion Mastery

```typescript
async function getChampionMastery(summonerId: string) {
    try {
        const masteries =
            await client.championMastery.getChampionMasteryBySummonerId(
                'NA1',
                summonerId
            )

        // Sort by mastery points
        const sortedMasteries = masteries.sort(
            (a, b) => b.championPoints - a.championPoints
        )

        console.log('Top 5 Champions:')
        sortedMasteries.slice(0, 5).forEach((mastery, index) => {
            console.log(
                `${index + 1}. Champion ${mastery.championId}: ${mastery.championPoints} points (Level ${mastery.championLevel})`
            )
        })

        return sortedMasteries
    } catch (error) {
        console.error('Failed to fetch champion mastery:', error)
        throw error
    }
}
```

### Error Handling

```typescript
import { AxiosError } from 'axios'

async function handleApiCall() {
    try {
        const summoner = await client.summoner.getSummonerByEncryptedPUUID(
            'NA1',
            'invalid-puuid'
        )
        return summoner
    } catch (error) {
        if (error instanceof AxiosError) {
            switch (error.response?.status) {
                case 401:
                    console.error('Invalid API key')
                    break
                case 403:
                    console.error('Forbidden - check API key permissions')
                    break
                case 404:
                    console.error('Summoner not found')
                    break
                case 429:
                    console.error('Rate limit exceeded')
                    break
                case 500:
                    console.error('Internal server error')
                    break
                default:
                    console.error('Unexpected error:', error.message)
            }
        }
        throw error
    }
}
```

## Rate Limiting

This library does not implement automatic rate limiting. You should implement rate limiting on your end to comply with Riot's API rate limits:

- **Personal API Key**: 100 requests every 2 minutes
- **Production API Key**: Varies based on approval

Consider using libraries like `bottleneck` or `p-limit` for rate limiting:

```typescript
import pLimit from 'p-limit'

const limit = pLimit(10) // Max 10 concurrent requests

const matches = await Promise.all(
    matchIds.map((matchId) =>
        limit(() => client.match.getMatchByMatchId('AMERICAS', matchId))
    )
)
```

## Environment Variables

You can store your API key in environment variables:

```bash
# .env
RIOT_API_KEY=your_api_key_here
```

```typescript
import { RiotClient } from '@kevinzhu/league-api-wrapper'

const client = new RiotClient({
    apiKey: process.env.RIOT_API_KEY!,
})
```

## TypeScript Support

This library is built with TypeScript and provides complete type definitions for all API responses:

```typescript
import type {
    SummonerDTO,
    MatchDto,
    Platform,
    Region,
} from '@kevinzhu/league-api-wrapper'

// All API responses are fully typed
const summoner: SummonerDTO = await client.summoner.getSummonerByEncryptedPUUID(
    'NA1',
    puuid
)
const match: MatchDto = await client.match.getMatchByMatchId(
    'AMERICAS',
    matchId
)
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

This project is not affiliated with Riot Games. League of Legends is a trademark of Riot Games, Inc.

## Support

- 🐛 [Report bugs](https://github.com/zqz979/league-api-wrapper/issues)
- 💡 [Request features](https://github.com/zqz979/league-api-wrapper/issues)
- 📖 [Riot Games API Documentation](https://developer.riotgames.com/docs/lol)
