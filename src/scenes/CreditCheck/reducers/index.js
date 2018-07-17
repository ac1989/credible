import * as TYPES from '../actions/types';
import { cards } from 'services/mock/data';

const initialState = [{ name: 'Nowhere Card' }];

export default (state = initialState, action) => {
  console.log('cards reducer', action);
  switch (action.type) {
    case TYPES.FETCH_ALL_CARDS:
      console.log('fetch all');
      return cards;

    case TYPES.TOGGLE_CARD_SELECT:
    // return state.map(card => card.id === action.cardId)
    // ? {...card, isSelected: !card.isSelected}
    default:
      return state;
  }
};
