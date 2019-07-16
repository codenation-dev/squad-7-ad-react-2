import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as RepositoriesActions } from '../ducks/repositories';

export function* getRepositories(action) {
  try {
    const response = yield call(
      api.get,
      `/users/${action.payload.username}/repos`
    );
    yield put(RepositoriesActions.getRepositoriesSuccess(response.data));
  } catch (err) {
    yield put(RepositoriesActions.getRepositoriesFailure());
  }
}
