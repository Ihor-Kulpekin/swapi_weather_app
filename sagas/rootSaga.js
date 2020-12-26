import { all, takeLatest, takeEvery, debounce } from 'redux-saga/effects';
import { WeatherActions, StarshipsAction, Starship_Detail, FILMS_FOR_DETAILS_STARSHIP } from '../constants/constants';
import weatherSaga from './weatherSaga';
import getStarshipsSaga from './starhipsSaga';
import { getStarshipDetailsSaga } from './starshipDetailsSaga';
import starshipAdditionalDataSaga from './starshipAdditionalDataSaga';

export default function* rootSaga() {
  yield all([
    yield debounce(500, StarshipsAction.GET_STARSHIPS, getStarshipsSaga),
    yield takeEvery(FILMS_FOR_DETAILS_STARSHIP.FILMS_FOR_DETAILS_STARSHIP, starshipAdditionalDataSaga),
    yield takeLatest(WeatherActions.GET_WEATHER, weatherSaga),
    yield takeLatest(Starship_Detail.STARSHIP_GET_DETAIL, getStarshipDetailsSaga)
  ]);
}
