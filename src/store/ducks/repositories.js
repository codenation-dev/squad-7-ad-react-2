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
  userId: null,
  avatarUrl: '',
  email: '',
  blog: '',
  data: [],
  pageCount: 0,
  pageIndex: 0,
  error: false,
  loading: false,
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
      return { ...state, loading: true, error: false };
    case Types.GET_REPOSITORIES_SUCCESS: {
      const {
        id: userId,
        login: username,
        avatar_url: avatarUrl,
        email,
        blog,
      } = action.payload.responseUserProfile.data;
      return {
        ...state,
        username,
        userId,
        avatarUrl,
        email,
        blog,
        data: action.payload.responseRepos.data,
        pageCount:
          userId !== state.userId
            ? getPageCount(action.payload.responseRepos)
            : state.pageCount,
        pageIndex: userId !== state.userId ? 0 : action.payload.pageIndex,
        loading: false,
        error: false,
      };
    }
    case Types.GET_REPOSITORIES_FAILURE:
      return { data: [], loading: false, error: true };
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
  getRepositoriesSuccess: (responseRepos, responseUserProfile, pageIndex) => ({
    type: Types.GET_REPOSITORIES_SUCCESS,
    payload: { responseRepos, responseUserProfile, pageIndex },
  }),
  getRepositoriesFailure: () => ({
    type: Types.GET_REPOSITORIES_FAILURE,
  }),
};
