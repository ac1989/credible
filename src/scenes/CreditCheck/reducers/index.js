import * as TYPES from '../actions/types';
import { cards } from 'services/mock/data';

const initialState = {
  status: 'FORM',
  cards: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FETCH_ALL_CARDS:
      return { ...state, status: 'FETCHING_CARDS' };
    case TYPES.UPDATE_CREDIT_CHECK_STATUS:
      return { ...state, status: action.status };
    case TYPES.FETCH_ALL_CARDS_SUCCESS:
      return { status: 'CARD_SELECTION', cards };
    default:
      return state;
  }
};
