import { call, put } from 'redux-saga/effects';

import { getStarships as apiGetStarships } from '../api/apiStarships';
import { getStarshipsFailure, getStarshipsSuccess } from '../actions/starshipsActions';

export default function* getStarshipsSaga({ payload }) {
  try {
    const result = yield call(apiGetStarships, payload);
    yield put(getStarshipsSuccess(result));
  } catch (error) {
    yield put(getStarshipsFailure(error));
  }
}
