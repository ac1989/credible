import { all, call, takeLatest, put } from 'redux-saga/effects';
// TODO: move sagas to scene;
import * as TYPES from 'scenes/CreditCheck/actions/types';
import { mockFetchAllCards } from 'api';

function* helloWorld() {
  console.log('Hello Saga');
}

function* fetchAllCards() {
  yield put({
    type: TYPES.UPDATE_CREDIT_CHECK_STATUS,
    status: 'FETCHING_CARDS'
  });
  const res = yield call(mockFetchAllCards);
  yield put({
    type: TYPES.FETCH_ALL_CARDS_SUCCESS,
    cards: res.data
  });
}

function* watchFetchAllCards() {
  yield takeLatest(TYPES.FETCH_ALL_CARDS, fetchAllCards);
}

export default function* rootSaga() {
  yield all([helloWorld(), watchFetchAllCards()]);
}
