import { all, takeLatest, debounce } from 'redux-saga/effects';
import { WeatherActions, StarshipsAction, Starship_Detail } from '../constants/constants';
import weatherSaga from './weatherSaga';
import getStarshipsSaga from './starhipsSaga';
import { getStarshipDetailsSaga } from './starshipDetailsSaga';

export default function* rootSaga() {
  yield all([
    yield debounce(500, StarshipsAction.GET_STARSHIPS, getStarshipsSaga),
    yield takeLatest(WeatherActions.GET_WEATHER, weatherSaga),
    yield takeLatest(Starship_Detail.STARSHIP_GET_DETAIL, getStarshipDetailsSaga)
  ]);
}
