import { handleActions } from 'redux-actions';
import {
  getFilmsForDetailsStarship,
  getFilmsForDetailsStarshipFailure,
  getFilmsForDetailsStarshipSuccess
} from '../actions/starshipDetailsActions';

const initialState = {
  error: false,
  loading: false,
  data: undefined
};

export default {
  starshipAdditionalData: handleActions({
    [getFilmsForDetailsStarship]: (state) => {
      return {
        ...state,
        error: false,
        loading: true
      };
    },
    [getFilmsForDetailsStarshipSuccess]:(state, {payload})=>{
      return {
        ...state,
        loading: false,
        error: false,
        data: payload
      }
    },
    [getFilmsForDetailsStarshipFailure]:(state)=>{
      return {
        ...state,
        loading: false,
        error: true
      }
    }
  }, initialState)
};
