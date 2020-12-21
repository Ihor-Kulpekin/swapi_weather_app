import {handleActions} from 'redux-actions';
import {getWeather, getWeatherFailure, getWeatherSuccess} from "../actions/weatherActions";

const initialState = {
    data: null,
    city: '',
    error: false
}

export default {
    weather: handleActions({
        [getWeather]: (state, payload) => {
            return{
                ...state,
                city: payload
            }
        },
        [getWeatherSuccess]:(state, {payload}) => {
            return{
                ...state,
                data: payload,
                error: false
            }
        },
        [getWeatherFailure]:(state, payload) => {
            return {
                ...state,
                error: payload.error
            }
        }
    }, initialState)
}
