import * as actions from '.';
import * as TYPES from './types';

describe('Credit Check actions', () => {
  it('should create an action to fetch eligible cards', () => {
    const expectedAction = {
      type: TYPES.FETCH_ELIGIBLE_CARDS,
      criteria: { annual_income: 12000, employment_status: 'student' }
    };
    expect(
      actions.fetchEligibleCards({
        annual_income: 12000,
        employment_status: 'student'
      })
    ).toEqual(expectedAction);
  });
});
