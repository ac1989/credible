import * as TYPES from './types';

export const fetchEligibleCards = criteria => ({
  type: TYPES.FETCH_ELIGIBLE_CARDS,
  criteria
});
