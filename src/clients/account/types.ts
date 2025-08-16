interface AccountDto {
    puuid: string
    gameName: string
    tagLine: string
}

interface AccountRegionDTO {
    puuid: string
    game: string
    region: string
}

export type { AccountDto, AccountRegionDTO }
