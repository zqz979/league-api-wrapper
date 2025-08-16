interface MiniSeriesDTO {
    losses: number
    progress: string
    target: number
    wins: number
}

interface LeagueItemDTO {
    freshBlood: boolean
    wins: number
    miniSeries: MiniSeriesDTO
    inactive: boolean
    veteran: boolean
    hotStreak: boolean
    rank: string
    leaguePoints: number
    losses: number
    puuid: string
}

interface LeagueListDTO {
    leagueId: string
    entries: LeagueItemDTO[]
    tier: string
    name: string
    queue: string
}

interface MiniSeriesDTO {
    losses: number
    progress: string
    target: number
    wins: number
}

interface LeagueEntryDTO {
    leagueId: string
    puuid: string
    queueType: string
    tier: string
    rank: string
    leaguePoints: number
    wins: number
    losses: number
    hotStreak: boolean
    veteran: boolean
    freshBlood: boolean
    inactive: boolean
    miniSeries: MiniSeriesDTO
}

type Queue = 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT'
type Tier =
    | 'IRON'
    | 'BRONZE'
    | 'SILVER'
    | 'GOLD'
    | 'PLATINUM'
    | 'EMERALD'
    | 'DIAMOND'
type Division = 'I' | 'II' | 'III' | 'IV'

export type {
    LeagueItemDTO,
    LeagueListDTO,
    MiniSeriesDTO,
    LeagueEntryDTO,
    Queue,
    Tier,
    Division,
}
