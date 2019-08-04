import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import api from '../../services/api';

import { getRepositories } from '../../store/sagas/repositories';
import {
  Creators as RepositoriesActions,
  Types as RepositoriesTypes,
} from '../../store/ducks/repositories';

const apiMock = new MockAdapter(api);

describe('Repositories Saga', () => {
  it('should be able to fetch repositories', async () => {
    const dispatched = [];
    const initialAction = {
      payload: {
        username: 'test-saga',
        pageNumber: 1,
      },
    };

    apiMock
      .onGet(`/users/${initialAction.payload.username}/repos`)
      .reply(200, ['repo 1', 'repo 2']);

    apiMock
      .onGet(`/users/${initialAction.payload.username}`)
      .reply(200, ['user 1']);

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      getRepositories,
      initialAction
    ).toPromise();

    expect(dispatched[0].type).toBe(RepositoriesTypes.GET_REPOSITORIES_SUCCESS);
    expect(dispatched[0].payload.responseRepos.data).toStrictEqual([
      'repo 1',
      'repo 2',
    ]);
    expect(dispatched[0].payload.responseUserProfile.data).toStrictEqual([
      'user 1',
    ]);
  });

  it('should be able to failure on fetch repositories', async () => {
    const dispatched = [];
    const action = {
      payload: {
        username: 'test-saga',
      },
    };

    apiMock.onGet('/users/test-saga/repos').reply(400, []);

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      getRepositories,
      action
    ).toPromise();

    expect(dispatched).toContainEqual(
      RepositoriesActions.getRepositoriesFailure()
    );
  });
});
