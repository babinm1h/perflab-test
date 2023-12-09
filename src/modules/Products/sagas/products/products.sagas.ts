import { call, put, takeLatest } from 'redux-saga/effects';
import { productsActions } from '../../slices/products.slice';
import { ProductsApi } from '../../api';

export function* productsRequestSaga({ payload }: ReturnType<typeof productsActions.productsRequest>) {
  try {
    const { data } = yield call(ProductsApi.getProducts, payload);
    yield put(productsActions.productsRequestSuccess(data));
  } catch (err) {
    yield put(productsActions.productsRequestError(err as string));
  }
}

export default function* listener() {
  yield takeLatest(productsActions.productsRequest.type, productsRequestSaga);
}
