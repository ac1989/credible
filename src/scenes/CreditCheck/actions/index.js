import * as TYPES from './types';

export const fetchAllCards = () => ({
  type: TYPES.FETCH_ALL_CARDS
});

export const fetchEligibleCards = criteria => {
  console.log('action');
  return {
    type: TYPES.FETCH_ELIGIBLE_CARDS,
    criteria
  };
};
