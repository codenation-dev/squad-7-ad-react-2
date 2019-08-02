import parse from 'parse-link-header';

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
  username: '',
  data: [],
  loading: false,
  pageCount: 0,
};

const getPageCount = response => {
  const parsedLinkHeader = parse(response.headers.link);
  if (parsedLinkHeader.last) {
    const {
      last: { page: pageCount },
    } = parsedLinkHeader;
    return parseInt(pageCount, 10);
  }
  return 0;
};

export default function Repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REPOSITORIES_REQUEST:
      return { ...state, loading: true };
    case Types.GET_REPOSITORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.response.data,
        username: action.payload.username,
        pageCount:
          action.payload.username !== state.username
            ? getPageCount(action.payload.response)
            : state.pageCount,
      };
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
  getRepositoriesRequest: (username, pageNumber = 1) => ({
    type: Types.GET_REPOSITORIES_REQUEST,
    payload: { username, pageNumber },
  }),
  getRepositoriesSuccess: (response, username) => ({
    type: Types.GET_REPOSITORIES_SUCCESS,
    payload: { response, username },
  }),
  getRepositoriesFailure: () => ({
    type: Types.GET_REPOSITORIES_FAILURE,
  }),
};
