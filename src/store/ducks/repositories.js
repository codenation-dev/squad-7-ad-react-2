/**
 * Types of reducer repositories
 */

export const Types = {
  ADD_REQUEST: 'Repositories/ADD_REQUEST',
  ADD_SUCESS: 'Repositories/ADD_SUCESS',
  REMOVE: 'Repositories/REMOVE',
};

/**
 * Reducer repositories
 */

const INITIAL_STATE = [
  {
    id: 1,
    name: 'facebook/react',
    avatar_url: 'facebook',
  },
  {
    id: 2,
    name: 'angular/angular',
    avatar_url: 'angular',
  },
  {
    id: 3,
    name: 'vuejs/vue',
    avatar_url: 'vue',
  },
];

export default function Repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return state;
    case Types.ADD_SUCESS:
      return state;
    case Types.REMOVE:
      return state;
    default:
      return state;
  }
}

/**
 * Actions of repositories
 */

export const Creators = {
  addRepositoryRequest: repository => ({
    type: Types.ADD_REQUEST,
    payload: { repository },
  }),
  addRepositorySucess: repository => ({
    type: Types.ADD_SUCESS,
    payload: { repository },
  }),
  removeRepository: repository => ({
    type: Types.REMOVE,
    payload: { repository },
  }),
};
