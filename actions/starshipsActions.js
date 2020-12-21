import { createAction } from 'redux-actions';

import { StarshipsAction } from '../constants/constants';

export const getStarships = createAction(StarshipsAction.GET_STARSHIPS, (payload) => payload);

export const getStarshipsSuccess = createAction(
  StarshipsAction.GET_STARSHIPS_SUCCESS,
  (payload) => payload
);

export const getStarshipsFailure = createAction(
  StarshipsAction.GET_STARSHIPS_FAILURE,
  (payload) => payload
);
