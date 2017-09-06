import api from '../api';
import {
  LOAD_ALL_GISTS_SUCCESS,
  LOAD_ALL_GISTS_FAILURE,
  LOAD_GIST_SUCCESS,
  LOAD_GIST_FAILURE,
} from '../actionTypes';

import { addLoading, removeLoading } from './loading';

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

export const loadGistSuccess = response => ({
  type: LOAD_GIST_SUCCESS,
  data: response.data,
});

export const loadGistFailure = errors => ({
  type: LOAD_GIST_FAILURE,
  message: errors.response,
});

export const findAllGists = pagination => dispatch => {
  dispatch(addLoading());

  api.gist
    .findAll(pagination)
    .then(response => {
      dispatch(removeLoading());
      dispatch(loadAllGistsSuccess(response));
    })
    .catch(errors => {
      dispatch(removeLoading());
      dispatch(loadAllGistsFailure(errors));
    });
};

export const findGist = gistId => dispatch => {
  dispatch(addLoading());

  api.gist
    .find(gistId)
    .then(response => {
      dispatch(removeLoading());
      dispatch(loadGistSuccess(response));
    })
    .catch(errors => {
      dispatch(removeLoading());
      dispatch(loadGistFailure(errors));
    });
};
