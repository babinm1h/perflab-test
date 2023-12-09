import { productsSagas } from '@/modules/Products/sagas';
import { all, fork } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([productsSagas].map(fork));
}
