import {type LeagueEntryDTO} from '../league/index.js';

interface LeagueEntryDTOExtended extends LeagueEntryDTO {
  summonerId: string;
}

export type {LeagueEntryDTOExtended};
