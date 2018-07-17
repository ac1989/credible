import * as TYPES from './types';

export const fetchAllCards = () => ({
  type: TYPES.FETCH_ALL_CARDS
});

export const toggleCardSelect = cardId => ({
  type: TYPES.TOGGLE_CARD_SELECT,
  cardId
});
