import { fork } from 'redux-saga/effects';

import productsRequestSaga from './products.sagas';

export function* productsSagas() {
  yield fork(productsRequestSaga);
}
