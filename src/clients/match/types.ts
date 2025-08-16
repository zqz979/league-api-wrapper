interface MetadataDto {
    dataVersion: string
    matchId: string
    participants: string[]
}

type ChampionTransform = '0' | '1' | '2'

interface ChallengesDto {
    '12AssistStreakCount': number

    baronBuffGoldAdvantageOverThreshold: number

    controlWardTimeCoverageInRiverOrEnemyHalf: number

    earliestBaron: number

    earliestDragonTakedown: number

    earliestElderDragon: number

    earlyLaningPhaseGoldExpAdvantage: number

    fasterSupportQuestCompletion: number

    fastestLegendary: number

    hadAfkTeammate: number

    highestChampionDamage: number

    highestCrowdControlScore: number

    highestWardKills: number

    junglerKillsEarlyJungle: number

    killsOnLanersEarlyJungleAsJungler: number

    laningPhaseGoldExpAdvantage: number

    legendaryCount: number

    maxCsAdvantageOnLaneOpponent: number

    maxLevelLeadLaneOpponent: number

    mostWardsDestroyedOneSweeper: number

    mythicItemUsed: number

    playedChampSelectPosition: number

    soloTurretsLategame: number

    takedownsFirst25Minutes: number

    teleportTakedowns: number

    thirdInhibitorDestroyedTime: number

    threeWardsOneSweeperCount: number

    visionScoreAdvantageLaneOpponent: number

    InfernalScalePickup: number

    fistBumpParticipation: number

    voidMonsterKill: number

    abilityUses: number

    acesBefore15Minutes: number

    alliedJungleMonsterKills: number

    baronTakedowns: number

    blastConeOppositeOpponentCount: number

    bountyGold: number

    buffsStolen: number

    completeSupportQuestInTime: number

    controlWardsPlaced: number

    damagePerMinute: number

    damageTakenOnTeamPercentage: number

    dancedWithRiftHerald: number

    deathsByEnemyChamps: number

    dodgeSkillShotsSmallWindow: number

    doubleAces: number

    dragonTakedowns: number

    legendaryItemUsed: number[]

    effectiveHealAndShielding: number

    elderDragonKillsWithOpposingSoul: number

    elderDragonMultikills: number

    enemyChampionImmobilizations: number

    enemyJungleMonsterKills: number

    epicMonsterKillsNearEnemyJungler: number

    epicMonsterKillsWithin30SecondsOfSpawn: number

    epicMonsterSteals: number

    epicMonsterStolenWithoutSmite: number

    firstTurretKilled: number

    firstTurretKilledTime: number

    flawlessAces: number

    fullTeamTakedown: number

    gameLength: number

    getTakedownsInAllLanesEarlyJungleAsLaner: number

    goldPerMinute: number

    hadOpenNexus: number

    immobilizeAndKillWithAlly: number

    initialBuffCount: number

    initialCrabCount: number

    jungleCsBefore10Minutes: number

    junglerTakedownsNearDamagedEpicMonster: number

    kda: number

    killAfterHiddenWithAlly: number

    killedChampTookFullTeamDamageSurvived: number

    killingSprees: number

    killParticipation: number

    killsNearEnemyTurret: number

    killsOnOtherLanesEarlyJungleAsLaner: number

    killsOnRecentlyHealedByAramPack: number

    killsUnderOwnTurret: number

    killsWithHelpFromEpicMonster: number

    knockEnemyIntoTeamAndKill: number

    kTurretsDestroyedBeforePlatesFall: number

    landSkillShotsEarlyGame: number

    laneMinionsFirst10Minutes: number

    lostAnInhibitor: number

    maxKillDeficit: number

    mejaisFullStackInTime: number

    moreEnemyJungleThanOpponent: number

    multiKillOneSpell: number

    multikills: number

    multikillsAfterAggressiveFlash: number

    multiTurretRiftHeraldCount: number

    outerTurretExecutesBefore10Minutes: number

    outnumberedKills: number

    outnumberedNexusKill: number

    perfectDragonSoulsTaken: number

    perfectGame: number

    pickKillWithAlly: number

    poroExplosions: number

    quickCleanse: number

    quickFirstTurret: number

    quickSoloKills: number

    riftHeraldTakedowns: number

    saveAllyFromDeath: number

    scuttleCrabKills: number

    shortestTimeToAceFromFirstTakedown: number

    skillshotsDodged: number

    skillshotsHit: number

    snowballsHit: number

    soloBaronKills: number

    SWARM_DefeatAatrox: number

    SWARM_DefeatBriar: number

    SWARM_DefeatMiniBosses: number

    SWARM_EvolveWeapon: number

    SWARM_Have3Passives: number

    SWARM_KillEnemy: number

    SWARM_PickupGold: number

    SWARM_ReachLevel50: number

    SWARM_Survive15Min: number

    SWARM_WinWith5EvolvedWeapons: number

    soloKills: number

    stealthWardsPlaced: number

    survivedSingleDigitHpCount: number

    survivedThreeImmobilizesInFight: number

    takedownOnFirstTurret: number

    takedowns: number

    takedownsAfterGainingLevelAdvantage: number

    takedownsBeforeJungleMinionSpawn: number

    takedownsFirstXMinutes: number

    takedownsInAlcove: number

    takedownsInEnemyFountain: number

    teamBaronKills: number

    teamDamagePercentage: number

    teamElderDragonKills: number

    teamRiftHeraldKills: number

    tookLargeDamageSurvived: number

    turretPlatesTaken: number

    turretsTakenWithRiftHerald: number

    turretTakedowns: number

    twentyMinionsIn3SecondsCount: number

    twoWardsOneSweeperCount: number

    unseenRecalls: number

    visionScorePerMinute: number

    wardsGuarded: number

    wardTakedowns: number

    wardTakedownsBefore20M: number
}

interface MissionsDto {
    playerScore0: number
    playerScore1: number
    playerScore2: number
    playerScore3: number
    playerScore4: number
    playerScore5: number
    playerScore6: number
    playerScore7: number
    playerScore8: number
    playerScore9: number
    playerScore10: number
    playerScore11: number
}

interface PerkStatsDto {
    defense: number
    flex: number
    offense: number
}

interface PerkStyleSelectionDto {
    perk: number
    var1: number
    var2: number
    var3: number
}

interface PerkStyleDto {
    description: string
    selections: PerkStyleSelectionDto[]
    style: number
}

interface PerksDto {
    statPerks: PerkStatsDto
    styles: PerkStyleDto[]
}

interface ParticipantDto {
    allInPings: number
    assistMePings: number
    assists: number
    baronKills: number
    bountyLevel: number
    champExperience: number
    champLevel: number
    championId: number
    championName: string
    commandPings: number
    championTransform: ChampionTransform
    consumablesPurchased: number
    challenges: ChallengesDto
    damageDealtToBuildings: number
    damageDealtToObjectives: number
    damageDealtToTurrets: number
    damageSelfMitigated: number
    deaths: number
    detectorWardsPlaced: number
    doubleKills: number
    dragonKills: number
    eligibleForProgression: boolean
    enemyMissingPings: number
    enemyVisionPings: number
    firstBloodAssist: boolean
    firstBloodKill: boolean
    firstTowerAssist: boolean
    firstTowerKill: boolean
    gameEndedInEarlySurrender: boolean
    gameEndedInSurrender: boolean
    holdPings: number
    getBackPings: number
    goldEarned: number
    goldSpent: number
    individualPosition: string
    inhibitorKills: number
    inhibitorTakedowns: number
    inhibitorsLost: number
    item0: number
    item1: number
    item2: number
    item3: number
    item4: number
    item5: number
    item6: number
    itemsPurchased: number
    killingSprees: number
    kills: number
    lane: string
    largestCriticalStrike: number
    largestKillingSpree: number
    largestMultiKill: number
    longestTimeSpentLiving: number
    magicDamageDealt: number
    magicDamageDealtToChampions: number
    magicDamageTaken: number
    missions: MissionsDto
    neutralMinionsKilled: number
    needVisionPings: number
    nexusKills: number
    nexusTakedowns: number
    nexusLost: number
    objectivesStolen: number
    objectivesStolenAssists: number
    onMyWayPings: number
    participantId: number
    playerScore0: number
    playerScore1: number
    playerScore2: number
    playerScore3: number
    playerScore4: number
    playerScore5: number
    playerScore6: number
    playerScore7: number
    playerScore8: number
    playerScore9: number
    playerScore10: number
    playerScore11: number
    pentaKills: number
    perks: PerksDto
    physicalDamageDealt: number
    physicalDamageDealtToChampions: number
    physicalDamageTaken: number
    placement: number
    playerAugment1: string
    playerAugment2: string
    playerAugment3: string
    playerAugment4: string
    playerSubteamId: number
    pushPings: number
    profileIcon: number
    puuid: string
    quadraKills: number
    riotIdGameName: string
    riotIdTagline: string
    role: string
    sightWardsBoughtInGame: number
    spell1Casts: number
    spell2Casts: number
    spell3Casts: number
    spell4Casts: number
    subteamPlacement: number
    summoner1Casts: number
    summoner1Id: number
    summoner2Casts: number
    summoner2Id: number
    summonerId: string
    summonerLevel: number
    summonerName: string
    teamEarlySurrendered: boolean
    teamId: number
    teamPosition: string
    timeCCingOthers: number
    timePlayed: number
    totalAllyJungleMinionsKilled: number
    totalDamageDealt: number
    totalDamageDealtToChampions: number
    totalDamageShieldedOnTeammates: number
    totalDamageTaken: number
    totalEnemyJungleMinionsKilled: number
    totalHeal: number
    totalHealsOnTeammates: number
    totalMinionsKilled: number
    totalTimeCCDealt: number
    totalTimeSpentDead: number
    totalUnitsHealed: number
    tripleKills: number
    trueDamageDealt: number
    trueDamageDealtToChampions: number
    trueDamageTaken: number
    turretKills: number
    turretTakedowns: number
    turretsLost: number
    unrealKills: number
    visionScore: number
    visionClearedPings: number
    visionWardsBoughtInGame: number
    wardsKilled: number
    wardsPlaced: number
    win: boolean
}

interface BanDto {
    championId: number
    pickTurn: number
}

interface ObjectiveDto {
    first: boolean
    kills: number
}

interface ObjectivesDto {
    baron: ObjectiveDto
    champion: ObjectiveDto
    dragon: ObjectiveDto
    horde: ObjectiveDto
    inhibitor: ObjectiveDto
    riftHerald: ObjectiveDto
    tower: ObjectiveDto
}

interface TeamDto {
    bans: BanDto[]
    objectives: ObjectivesDto
    teamId: number
    win: boolean
}

interface InfoDto {
    endOfGameResult: string
    gameCreation: number
    gameDuration: number
    gameEndTimestamp: number
    gameId: number
    gameMode: string
    gameName: string
    gameStartTimestamp: number
    gameType: string
    gameVersion: string
    mapId: number
    participants: ParticipantDto[]
    platformId: string
    queueId: number
    teams: TeamDto[]
    tournamentCode: string
}

interface MatchDto {
    metadata: MetadataDto
    info: InfoDto
}

interface MetadataTimeLineDto {
    dataVersion: string
    matchId: string
    participants: string[]
}

interface ParticipantTimeLineDto {
    participantId: number
    puuid: string
}

interface EventsTimeLineDto {
    timestamp: number
    realTimestamp: number
    type: string
}

interface ChampionStatsDto {
    abilityHaste: number
    abilityPower: number
    armor: number
    armorPen: number
    armorPenPercent: number
    attackDamage: number
    attackSpeed: number
    bonusArmorPenPercent: number
    bonusMagicPenPercent: number
    ccReduction: number
    cooldownReduction: number
    health: number
    healthMax: number
    healthRegen: number
    lifesteal: number
    magicPen: number
    magicPenPercent: number
    magicResist: number
    movementSpeed: number
    omnivamp: number
    physicalVamp: number
    power: number
    powerMax: number
    powerRegen: number
    spellVamp: number
}

interface DamageStatsDto {
    magicDamageDone: number
    magicDamageDoneToChampions: number
    magicDamageTaken: number
    physicalDamageDone: number
    physicalDamageDoneToChampions: number
    physicalDamageTaken: number
    totalDamageDone: number
    totalDamageDoneToChampions: number
    totalDamageTaken: number
    trueDamageDone: number
    trueDamageDoneToChampions: number
    trueDamageTaken: number
}

interface PositionDto {
    x: number
    y: number
}

interface ParticipantFrameDto {
    championStats: ChampionStatsDto
    currentGold: number
    damageStats: DamageStatsDto
    goldPerSecond: number
    jungleMinionsKilled: number
    level: number
    minionsKilled: number
    participantId: number
    position: PositionDto
    timeEnemySpentControlled: number
    totalGold: number
    xp: number
}

interface ParticipantFramesDto {
    1: ParticipantFrameDto
    2: ParticipantFrameDto
    3: ParticipantFrameDto
    4: ParticipantFrameDto
    5: ParticipantFrameDto
    6: ParticipantFrameDto
    7: ParticipantFrameDto
    8: ParticipantFrameDto
    9: ParticipantFrameDto
}

interface FramesTimeLineDto {
    events: EventsTimeLineDto
    participantFrames: ParticipantFramesDto
    timestamp: number
}

interface InfoTimeLineDto {
    endOfGameResult: string
    frameInterval: number
    gameId: number
    participants: ParticipantTimeLineDto[]
    frames: FramesTimeLineDto[]
}

interface TimelineDto {
    metadata: MetadataTimeLineDto
    info: InfoTimeLineDto
}

export type {
    ChampionTransform,
    MatchDto,
    MetadataDto,
    ChallengesDto,
    MissionsDto,
    PerkStatsDto,
    PerkStyleSelectionDto,
    PerkStyleDto,
    PerksDto,
    ParticipantDto,
    BanDto,
    ObjectiveDto,
    ObjectivesDto,
    InfoDto,
    MetadataTimeLineDto,
    ParticipantTimeLineDto,
    EventsTimeLineDto,
    ChampionStatsDto,
    DamageStatsDto,
    PositionDto,
    ParticipantFrameDto,
    ParticipantFramesDto,
    FramesTimeLineDto,
    InfoTimeLineDto,
    TimelineDto,
}
