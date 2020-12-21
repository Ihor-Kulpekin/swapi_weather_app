import { createAction } from 'redux-actions';

import { Starship_Detail } from '../constants/constants';

export const getStarshipDetails = createAction(
  Starship_Detail.STARSHIP_GET_DETAIL,
  (payload) => payload
);

export const getStarshipDetailsSuccess = createAction(
  Starship_Detail.STARSHIP_GET_DETAIL_SUCCESS,
  (payload) => payload
);

export const getStarshipDetailsFailure = createAction(
  Starship_Detail.STARSHIP_GET_DETAIL_FAILURE,
  (payload) => payload
);
