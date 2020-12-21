import {createAction} from 'redux-actions';

import {WeatherActions} from '../constants/constants';

export const getWeather = createAction(WeatherActions.GET_WEATHER, (paylaod) => paylaod)
export const getWeatherSuccess = createAction(WeatherActions.GET_WEATHER_SUCCESS, (paylaod) => paylaod)
export const getWeatherFailure = createAction(WeatherActions.GET_WEATHER_FAILURE, (paylaod) => paylaod)
