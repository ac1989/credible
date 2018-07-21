import * as actions from '.';
import * as TYPES from './types';

describe('Credit Check actions', () => {
  it('should create an action to fetch all cards', () => {
    const expectedAction = { type: TYPES.FETCH_ALL_CARDS };
    expect(actions.fetchAllCards()).toEqual(expectedAction);
  });
});
