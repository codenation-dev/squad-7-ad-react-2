import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as RepositoriesActions } from '../ducks/repositories';

export function* getRepositories(action) {
  try {
    const responseRepos = yield call(
      api.get,
      `/users/${action.payload.username}/repos`,
      {
        params: {
          sort: 'created',
          per_page: '6',
          page: action.payload.pageNumber,
        },
      }
    );
    const responseUserProfile = yield call(
      api.get,
      `/users/${action.payload.username}`
    );
    yield put(
      RepositoriesActions.getRepositoriesSuccess(
        responseRepos,
        responseUserProfile,
        action.payload.pageNumber - 1
      )
    );
  } catch (err) {
    yield put(RepositoriesActions.getRepositoriesFailure());
  }
}
