type ChallengePercentileData = Record<
    string,
    Record<number, Record<ChallengeLevel, number>>
>
type ChallengeLevel =
    | 'NONE'
    | 'IRON'
    | 'BRONZE'
    | 'SILVER'
    | 'GOLD'
    | 'PLATINUM'
    | 'DIAMOND'
    | 'MASTER'
    | 'GRANDMASTER'
    | 'CHALLENGER'
    | 'HIGHEST_NOT_LEADERBOARD_ONLY'
    | 'HIGHEST'
    | 'LOWEST'

interface ApexPlayerInfoDto {
    puuid: string
    value: number
    position: number
}

type LocalizedNames = Record<string, Record<string, string>>
type State = 'DISABLED' | 'HIDDEN' | 'ENABLED' | 'ARCHIVED'
type Tracking = 'LIFETIME' | 'SEASON '

interface ChallengeConfigInfoDto {
    id: string
    localizedNames: LocalizedNames
    state: State
    tracking: Tracking
}

interface ChallengeConfigInfoDtoExtended extends ChallengeConfigInfoDto {
    startTimestamp: number
    endTimestamp: number
    leaderboard: boolean
    thresholds: Record<string, number>
}

interface ChallengeInfoDto {
    percentile: number
    playersInLevel: number
    achievedTime: number
    value: number
    challengeId: number
    level: ChallengeLevel
    position: number
}

interface PlayerClientPreferencesDto {
    bannerAccent: string
    title: string
    challengeIds: string[]
    crestBorder: string
    prestigeCrestBorderLevel: number
}

interface ChallengePointDto {
    level: string
    current: number
    max: number
    precentile: number
}

interface PlayerInfoDto {
    challenges: ChallengeInfoDto[]
    preferences: PlayerClientPreferencesDto
    totalPoints: ChallengePointDto
    categoryPoints: Record<string, ChallengePointDto>
}

export type {
    ChallengePercentileData,
    ChallengeLevel,
    ApexPlayerInfoDto,
    ChallengeConfigInfoDto,
    ChallengeConfigInfoDtoExtended,
    LocalizedNames,
    State,
    Tracking,
    ChallengeInfoDto,
    PlayerClientPreferencesDto,
    ChallengePointDto,
    PlayerInfoDto,
}
