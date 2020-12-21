import { handleActions } from 'redux-actions';

import {
  getStarshipDetails,
  getStarshipDetailsFailure,
  getStarshipDetailsSuccess
} from '../actions/starshipDetailsActions';

const initialState = {
  loading: false,
  error: false
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
        const { starshipId, starshipDetails } = payload;
        return {
          ...state,
          loading: false,
          error: false,
          [starshipId]: starshipDetails
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
