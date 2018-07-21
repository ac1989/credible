import { call, takeLatest, put } from 'redux-saga/effects';
import * as TYPES from 'scenes/CreditCheck/actions/types';
import { mockFetchEligibleCards } from 'api';

function* fetchEligibleCards(action) {
  const res = yield call(mockFetchEligibleCards, action.criteria);
  yield put({
    type: TYPES.FETCH_ELIGIBLE_CARDS_SUCCESS,
    cards: res.data
  });
}

export function* watchFetchEligibleCards() {
  yield takeLatest(TYPES.FETCH_ELIGIBLE_CARDS, fetchEligibleCards);
}
