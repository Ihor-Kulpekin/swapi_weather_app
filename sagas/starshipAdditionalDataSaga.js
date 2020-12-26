import {call, put} from 'redux-saga/effects'

import { getFilmsForDetailsStarship as apiGetFilms } from '../api/apiStarships';
import {
  getFilmsForDetailsStarshipFailure,
  getFilmsForDetailsStarshipSuccess
} from '../actions/starshipDetailsActions';

export default function* starshipAdditionalDataSaga({payload}) {
  try {
    const result = yield call(apiGetFilms, payload)
    yield put(getFilmsForDetailsStarshipSuccess(result))
  }catch (error) {
    yield put(getFilmsForDetailsStarshipFailure(error))
  }
}
