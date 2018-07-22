import SagaTester from 'redux-saga-tester';
import { watchFetchEligibleCards } from './index';
import reducer from '../reducers';

const initialState = {
  creditCheck: {
    status: 'FORM',
    cards: []
  }
};

describe('Credit Check saga', () => {
  let sagaTester;

  beforeEach(() => {
    sagaTester = new SagaTester({
      initialState,
      reducers: { creditCheck: reducer }
    });
  });

  it('should fetch only eligible cards', async () => {
    sagaTester.start(watchFetchEligibleCards);
    expect(sagaTester.getState()).toEqual(initialState);

    sagaTester.dispatch({
      type: 'FETCH_ELIGIBLE_CARDS',
      criteria: { annual_income: '30000', employment_status: 'student' }
    });
    await sagaTester.waitFor('FETCH_ELIGIBLE_CARDS_SUCCESS');
    expect(sagaTester.getState().creditCheck.cards.length).toEqual(3);

    sagaTester.reset(true);

    sagaTester.dispatch({
      type: 'FETCH_ELIGIBLE_CARDS',
      criteria: { annual_income: '12000', employment_status: 'student' }
    });
    await sagaTester.waitFor('FETCH_ELIGIBLE_CARDS_SUCCESS');
    expect(sagaTester.getState().creditCheck.cards.length).toEqual(2);

    sagaTester.reset(true);

    sagaTester.dispatch({
      type: 'FETCH_ELIGIBLE_CARDS',
      criteria: { annual_income: '12000', employment_status: 'partTime' }
    });
    await sagaTester.waitFor('FETCH_ELIGIBLE_CARDS_SUCCESS');
    expect(sagaTester.getState().creditCheck.cards.length).toEqual(1);
  });
});
