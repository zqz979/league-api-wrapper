const API_BASE_DOMAIN = 'api.riotgames.com';

const PLATFORM_ROUTES = {
  BR1: `br1.${API_BASE_DOMAIN}`,
  EUN1: `eun1.${API_BASE_DOMAIN}`,
  EUW1: `euw1.${API_BASE_DOMAIN}`,
  JP1: `jp1.${API_BASE_DOMAIN}`,
  KR: `kr.${API_BASE_DOMAIN}`,
  LA1: `la1.${API_BASE_DOMAIN}`,
  LA2: `la2.${API_BASE_DOMAIN}`,
  NA1: `na1.${API_BASE_DOMAIN}`,
  OC1: `oc1.${API_BASE_DOMAIN}`,
  TR1: `tr1.${API_BASE_DOMAIN}`,
  RU: `ru.${API_BASE_DOMAIN}`,
  PH2: `ph2.${API_BASE_DOMAIN}`,
  SG2: `sg2.${API_BASE_DOMAIN}`,
  TH2: `th2.${API_BASE_DOMAIN}`,
  TW2: `tw2.${API_BASE_DOMAIN}`,
  VN2: `vn2.${API_BASE_DOMAIN}`,
} as const;

type Platform = keyof typeof PLATFORM_ROUTES;

const REGION_ROUTES = {
  AMERICAS: `americas.${API_BASE_DOMAIN}`,
  ASIA: `asia.${API_BASE_DOMAIN}`,
  EUROPE: `europe.${API_BASE_DOMAIN}`,
  SEA: `sea.${API_BASE_DOMAIN}`,
} as const;

type Region = keyof typeof REGION_ROUTES;

export {API_BASE_DOMAIN, PLATFORM_ROUTES, REGION_ROUTES};
export type {Platform, Region};
