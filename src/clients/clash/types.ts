type Position =
    | 'UNSELECTED'
    | 'FILL'
    | 'TOP'
    | 'JUNGLE'
    | 'MIDDLE'
    | 'BOTTOM'
    | 'UTILITY'

type Role = 'CAPTAIN' | 'MEMBER'

interface PlayerDto {
    puuid: string
    position: Position
    role: Role
}

interface PlayerDtoExtended extends PlayerDto {
    teamId: string
}

interface TeamDto {
    id: string
    tournamentId: string
    name: string
    iconId: number
    tier: number
    captain: string
    abbreviation: string
    players: [PlayerDto]
}

interface TournamentPhaseDto {
    id: number
    registrationTime: string
    startTime: string
    cancelled: boolean
}

interface TournamentDto {
    id: number
    themeId: number
    nameKey: string
    nameKeySecondary: string
    schedule: TournamentPhaseDto[]
}

export type {
    Position,
    Role,
    PlayerDto,
    PlayerDtoExtended,
    TeamDto,
    TournamentPhaseDto,
    TournamentDto,
}
