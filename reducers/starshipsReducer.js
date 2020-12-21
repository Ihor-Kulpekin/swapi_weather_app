import { handleActions } from 'redux-actions';

import {
  getStarships,
  getStarshipsFailure,
  getStarshipsSuccess
} from '../actions/starshipsActions';

const initialState = {
  loading: true,
  error: false,
  starships: null
};

export default {
  starships: handleActions(
    {
      [getStarships]: (state) => {
        return {
          ...state,
          loading: true
        };
      },
      [getStarshipsSuccess]: (state, { payload }) => {
        return {
          ...state,
          loading: false,
          error: false,
          starships: payload
        };
      },
      [getStarshipsFailure]: (state) => {
        return {
          ...state,
          loading: false,
          error: true
        };
      }
    },
    initialState
  )
};
