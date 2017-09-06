import {
  LOAD_ALL_GISTS,
  LOAD_ALL_GISTS_SUCCESS,
  LOAD_ALL_GISTS_FAILURE,
} from '../actionTypes';

const initialState = {
  data: [],
  headerLink: null,
  errors: [],
  loading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_ALL_GISTS:
      return { loading: true };
    case LOAD_ALL_GISTS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        headerLink: action.payload.headerLink,
      };
    case LOAD_ALL_GISTS_FAILURE:
      return {
        loading: false,
        errors: { global: action.message },
      };
    default:
      return state;
  }
};

export default reducer;
