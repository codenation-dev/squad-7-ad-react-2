import { all, takeLatest } from 'redux-saga/effects';

import { Types as RepositoriesTypes } from '../ducks/repositories';

import { getRepositories } from './repositories';

export default function* rootSaga() {
  yield all([
    takeLatest(RepositoriesTypes.GET_REPOSITORIES_REQUEST, getRepositories),
  ]);
}
