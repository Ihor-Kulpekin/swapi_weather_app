import { handleActions } from 'redux-actions';

import {
  getStarshipDetails,
  getStarshipDetailsFailure,
  getStarshipDetailsSuccess
} from '../actions/starshipDetailsActions';

const initialState = {
  loading: false,
  error: false,
  starship: undefined
};

export default {
  starshipDetails: handleActions(
    {
      [getStarshipDetails]: (state) => ({
        ...state,
        loading: true,
        error: false
      }),
      [getStarshipDetailsSuccess]: (state, { payload }) => {
        const { starshipDetails } = payload;
        return {
          ...state,
          loading: false,
          error: false,
          starship: starshipDetails
        };
      },
      [getStarshipDetailsFailure]: (state) => {
        return {
          ...state,
          error: true,
          loading: false
        };
      }
    },
    initialState
  )
};
