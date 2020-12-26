import { createAction } from 'redux-actions';

import { Starship_Detail, FILMS_FOR_DETAILS_STARSHIP } from '../constants/constants';

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

export const getFilmsForDetailsStarship = createAction(
  FILMS_FOR_DETAILS_STARSHIP.FILMS_FOR_DETAILS_STARSHIP,
  (payload) => payload
);

export const getFilmsForDetailsStarshipSuccess = createAction(
  FILMS_FOR_DETAILS_STARSHIP.FILMS_FOR_DETAILS_STARSHIP_SUCCESS,
  (payload) => payload
);

export const getFilmsForDetailsStarshipFailure = createAction(
  FILMS_FOR_DETAILS_STARSHIP.FILMS_FOR_DETAILS_STARSHIP_FAILURE,
  (payload) => payload
);
