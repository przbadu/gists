import api from '../api';
import {
  LOAD_ALL_GISTS,
  LOAD_ALL_GISTS_SUCCESS,
  LOAD_ALL_GISTS_FAILURE,
} from '../actionTypes';

export const loadAllGists = () => ({
  type: LOAD_ALL_GISTS,
});

export const loadAllGistsSuccess = response => ({
  type: LOAD_ALL_GISTS_SUCCESS,
  payload: {
    data: response.data,
    headerLink: response.headers.link,
  },
});

export const loadAllGistsFailure = errors => ({
  type: LOAD_ALL_GISTS_FAILURE,
  message: errors.response,
});

export const findAllGists = pagination => dispatch => {
  // initiating fetch api
  dispatch({ type: LOAD_ALL_GISTS });

  // fetch api
  api.gist
    .findAll(pagination)
    .then(response => dispatch(loadAllGistsSuccess(response)))
    .catch(errors => dispatch(loadAllGistsFailure(errors)));
};
