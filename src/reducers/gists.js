import {
  ADD_LOADING,
  REMOVE_LOADING,
  LOAD_ALL_GISTS_SUCCESS,
  LOAD_ALL_GISTS_FAILURE,
  LOAD_GIST_SUCCESS,
  LOAD_GIST_FAILURE,
} from '../actionTypes';

const initialState = {
  data: [],
  headerLink: null,
  errors: [],
  loading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_LOADING:
      return { loading: true };
    case REMOVE_LOADING:
      return { loading: false };
    case LOAD_ALL_GISTS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        headerLink: action.payload.headerLink,
      };
    case LOAD_ALL_GISTS_FAILURE:
      return {
        errors: { global: action.message },
      };
    case LOAD_GIST_SUCCESS:
      return action.data;
    case LOAD_GIST_FAILURE:
      return {
        errors: { global: action.message },
      };
    default:
      return state;
  }
};

export default reducer;
