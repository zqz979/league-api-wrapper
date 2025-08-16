import { API_BASE_DOMAIN } from './baseDomain.js'

export const REGION_ROUTES = {
    AMERICAS: `americas.${API_BASE_DOMAIN}`,
    ASIA: `asia.${API_BASE_DOMAIN}`,
    EUROPE: `europe.${API_BASE_DOMAIN}`,
    SEA: `sea.${API_BASE_DOMAIN}`,
} as const

export type Region = keyof typeof REGION_ROUTES
