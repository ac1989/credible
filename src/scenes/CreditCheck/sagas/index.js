import { call, takeLatest, put } from 'redux-saga/effects';
import * as TYPES from 'scenes/CreditCheck/actions/types';
import { mockFetchAllCards, mockFetchEligibleCards } from 'api';

function* fetchAllCards() {
  const res = yield call(mockFetchAllCards);
  yield put({
    type: TYPES.FETCH_ALL_CARDS_SUCCESS,
    cards: res.data
  });
}

function* fetchEligibleCards(action) {
  console.log(action.criteria);
  const res = yield call(mockFetchEligibleCards, action.criteria);
  yield put({
    type: TYPES.FETCH_ELIGIBLE_CARDS_SUCCESS,
    cards: res.data
  });
}

export function* watchFetchAllCards() {
  yield takeLatest(TYPES.FETCH_ALL_CARDS, fetchAllCards);
}

export function* watchFetchEligibleCards() {
  yield takeLatest(TYPES.FETCH_ELIGIBLE_CARDS, fetchEligibleCards);
}
