import repositoriesReducer, {
  Creators as RepositoriesActions,
} from '../../../store/ducks/repositories';

describe('Repositories Reducer', () => {
  it('should be able to get repositories', () => {
    const state = repositoriesReducer(
      {},
      RepositoriesActions.getRepositoriesRequest()
    );

    expect(state.loading).toBe(true);
  });

  it('should return success on getting repositories', () => {
    const repo = [{ repo: 'test' }];

    const state = repositoriesReducer(
      { data: [] },
      RepositoriesActions.getRepositoriesSuccess(repo)
    );
    console.log(state);
    expect(state.loading).toBe(false);
    expect(state.data.length).toBe(1);
  });

  it('should return failure on getting repositories', () => {
    const state = repositoriesReducer(
      {},
      RepositoriesActions.getRepositoriesFailure()
    );

    expect(state.loading).toBe(false);
  });

  it('should return default', () => {
    const oldState = { repo: 'test' };
    const state = repositoriesReducer(oldState, { type: 'teste', payload: {} });

    expect(state).toEqual(oldState);
  });
});
