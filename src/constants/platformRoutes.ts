import { API_BASE_DOMAIN } from './baseDomain.js'

export const PLATFORM_ROUTES = {
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
} as const

export type Platform = keyof typeof PLATFORM_ROUTES
