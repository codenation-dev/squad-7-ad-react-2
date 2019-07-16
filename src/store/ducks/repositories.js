/**
 * Types of reducer repositories
 */

export const Types = {
  GET_REPOSITORIES_REQUEST: 'repositories/GET_REPOSITORIES_REQUEST',
  GET_REPOSITORIES_SUCCESS: 'repositories/GET_REPOSITORIES_SUCCESS',
  GET_REPOSITORIES_FAILURE: 'repositories/GET_REPOSITORIES_FAILURE',
};

/**
 * Reducer repositories
 */

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function Repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REPOSITORIES_REQUEST:
      return { ...state, loading: true };
    case Types.GET_REPOSITORIES_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case Types.GET_REPOSITORIES_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}

/**
 * Actions of repositories
 */

export const Creators = {
  getRepositoriesRequest: username => ({
    type: Types.GET_REPOSITORIES_REQUEST,
    payload: { username },
  }),

  getRepositoriesSuccess: data => ({
    type: Types.GET_REPOSITORIES_SUCCESS,
    payload: { data },
  }),

  getRepositoriesFailure: () => ({
    type: Types.GET_REPOSITORIES_FAILURE,
  }),
};
