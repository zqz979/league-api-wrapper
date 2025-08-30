import {LeagueEntryDTO} from '../league/types.js';

interface LeagueEntryDTOExtended extends LeagueEntryDTO {
  summonerId: string;
}

export type {LeagueEntryDTOExtended};
