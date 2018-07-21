import { all } from 'redux-saga/effects';
import { watchFetchEligibleCards } from 'scenes/CreditCheck/sagas';

export default function* rootSaga() {
  yield all([watchFetchEligibleCards()]);
}
