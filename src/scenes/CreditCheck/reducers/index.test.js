import reducer from '.';
import * as TYPES from '../actions/types';
import { cards } from 'services/mock/data';

describe('Credit Check reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      status: 'FORM',
      cards: []
    });
  });

  it('should set status to FETCHING_CARDS on fetchEligibleCards', () => {
    expect(reducer(undefined, { type: TYPES.FETCH_ELIGIBLE_CARDS })).toEqual({
      status: 'FETCHING_CARDS',
      cards: []
    });
  });

  it('should set status to CARD_SELECTION on successful card fetch', () => {
    expect(
      reducer(
        { status: 'FETCHING_CARDS', cards: [] },
        { type: TYPES.FETCH_ELIGIBLE_CARDS_SUCCESS }
      ).status
    ).toEqual('CARD_SELECTION');
  });

  it('should populate cards array on successful card fetch', () => {
    const expectedCards = cards;
    expect(
      reducer(
        { status: 'FETCHING_CARDS', cards: [] },
        { type: TYPES.FETCH_ELIGIBLE_CARDS_SUCCESS, cards: expectedCards }
      ).cards
    ).toEqual(expectedCards);
  });
});
