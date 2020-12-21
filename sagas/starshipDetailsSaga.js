import { call, put } from 'redux-saga/effects';

import { getDetailsStarship as apiGetDetailsStarship } from '../api/apiStarships';
import {
  getStarshipDetailsSuccess,
  getStarshipDetailsFailure
} from '../actions/starshipDetailsActions';

export function* getStarshipDetailsSaga({ payload }) {
  try {
    const starshipId = payload;
    const result = yield call(apiGetDetailsStarship, starshipId);
    yield put(
      getStarshipDetailsSuccess({
        starshipId,
        starshipDetails: result
      })
    );
  } catch (error) {
    yield put(getStarshipDetailsFailure(error));
  }
}
