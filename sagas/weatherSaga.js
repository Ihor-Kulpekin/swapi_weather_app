import {put, call} from 'redux-saga/effects';

import {getWeatherApi as weatherApi} from '../api/apiWeather';
import {getWeatherFailure, getWeatherSuccess} from "../actions/weatherActions";

export default function* weatherSaga({payload}) {
    try {
        const response = yield call(weatherApi, payload);
        yield put(getWeatherSuccess(response))
    }catch (error) {
        yield put(getWeatherFailure(error))
    }
}
