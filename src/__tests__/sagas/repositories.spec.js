import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import api from '../../services/api';

import { getRepositories } from '../../store/sagas/repositories';
import { Creators as RepositoriesActions } from '../../store/ducks/repositories';

const apiMock = new MockAdapter(api);

describe('Repositories Saga', () => {
  it('should be able to fetch repositories', async () => {
    const dispatched = [];
    const action = {
      payload: {
        username: 'test-saga',
      },
    };

    apiMock.onGet('/users/test-saga/repos').reply(200, ['repo 1', 'repo 2']);

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      getRepositories,
      action
    ).toPromise();

    expect(dispatched).toContainEqual(
      RepositoriesActions.getRepositoriesSuccess(['repo 1', 'repo 2'])
    );
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
