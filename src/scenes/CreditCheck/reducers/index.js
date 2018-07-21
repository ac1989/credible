import * as TYPES from '../actions/types';
import { cards } from 'services/mock/data';

const initialState = {
  status: 'FORM',
  cards: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FETCH_ELIGIBLE_CARDS:
      return { ...state, status: 'FETCHING_CARDS' };
    case TYPES.FETCH_ELIGIBLE_CARDS_SUCCESS:
      return { status: 'CARD_SELECTION', cards: action.cards };
    default:
      return state;
  }
};
