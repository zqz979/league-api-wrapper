/**
 * Data Dragon CDN URL builders
 * Provides helpers for constructing Riot's Data Dragon CDN URLs
 */

const DDRAGON_BASE = 'https://ddragon.leagueoflegends.com';

/**
 * Data Dragon version URL
 */
export function getVersionsUrl(): string {
  return `${DDRAGON_BASE}/api/versions.json`;
}

/**
 * Data Dragon languages URL
 */
export function getLanguagesUrl(): string {
  return `${DDRAGON_BASE}/cdn/languages.json`;
}

/**
 * Champions data URL
 */
export function getChampionsDataUrl(
  version: string,
  locale: string = 'en_US',
): string {
  return `${DDRAGON_BASE}/cdn/${version}/data/${locale}/champion.json`;
}

/**
 * Champion data URL
 */
export function getChampionDataUrl(
  championId: string,
  version: string,
  locale: string = 'en_US',
): string {
  return `${DDRAGON_BASE}/cdn/${version}/data/${locale}/champion/${championId}.json`;
}

/**
 * Items data URL
 */
export function getItemsDataUrl(
  version: string,
  locale: string = 'en_US',
): string {
  return `${DDRAGON_BASE}/cdn/${version}/data/${locale}/item.json`;
}

/**
 * Summoner spells data URL
 */
export function getSummonerSpellsDataUrl(
  version: string,
  locale: string = 'en_US',
): string {
  return `${DDRAGON_BASE}/cdn/${version}/data/${locale}/summoner.json`;
}

/**
 * Profile icons data URL
 */
export function getProfileIconsDataUrl(
  version: string,
  locale: string = 'en_US',
): string {
  return `${DDRAGON_BASE}/cdn/${version}/data/${locale}/profileicon.json`;
}

/**
 * Runes data URL
 */
export function getRunesDataUrl(
  version: string,
  locale: string = 'en_US',
): string {
  return `${DDRAGON_BASE}/cdn/${version}/data/${locale}/runesReforged.json`;
}

/**
 * Champion square icon URL
 */
export function getChampionIconUrl(
  championId: string,
  version: string,
): string {
  return `${DDRAGON_BASE}/cdn/${version}/img/champion/${championId}.png`;
}

/**
 * Champion splash art URL
 */
export function getChampionSplashUrl(
  championId: string,
  skinNum: number = 0,
): string {
  return `${DDRAGON_BASE}/cdn/img/champion/splash/${championId}_${skinNum}.jpg`;
}

/**
 * Champion loading screen URL
 */
export function getChampionLoadingUrl(
  championId: string,
  skinNum: number = 0,
): string {
  return `${DDRAGON_BASE}/cdn/img/champion/loading/${championId}_${skinNum}.jpg`;
}

/**
 * Item icon URL
 */
export function getItemIconUrl(itemId: number, version: string): string {
  return `${DDRAGON_BASE}/cdn/${version}/img/item/${itemId}.png`;
}

/**
 * Summoner spell icon URL
 */
export function getSummonerSpellIconUrl(
  spellId: string,
  version: string,
): string {
  return `${DDRAGON_BASE}/cdn/${version}/img/spell/${spellId}.png`;
}

/**
 * Profile icon URL
 */
export function getProfileIconUrl(iconId: number, version: string): string {
  return `${DDRAGON_BASE}/cdn/${version}/img/profileicon/${iconId}.png`;
}

/**
 * Champion passive ability icon URL
 */
export function getPassiveIconUrl(filename: string, version: string): string {
  return `${DDRAGON_BASE}/cdn/${version}/img/passive/${filename}`;
}

/**
 * Champion ability icon URL
 */
export function getAbilityIconUrl(filename: string, version: string): string {
  return `${DDRAGON_BASE}/cdn/${version}/img/spell/${filename}`;
}

/**
 * Minimap URL
 */
export function getMinimapUrl(mapId: number, version: string): string {
  return `${DDRAGON_BASE}/cdn/${version}/img/map/map${mapId}.png`;
}

/**
 * Sprite URL
 */
export function getSpriteUrl(spriteName: string, version: string): string {
  return `${DDRAGON_BASE}/cdn/${version}/img/sprite/${spriteName}`;
}

/**
 * Rune icon URL
 */
export function getRuneIconUrl(iconPath: string): string {
  return `${DDRAGON_BASE}/cdn/img/${iconPath}`;
}
