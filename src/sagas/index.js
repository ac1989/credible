import { all } from 'redux-saga/effects';
import {
  watchFetchAllCards,
  watchFetchEligibleCards
} from 'scenes/CreditCheck/sagas';

export default function* rootSaga() {
  yield all([watchFetchAllCards(), watchFetchEligibleCards()]);
}
