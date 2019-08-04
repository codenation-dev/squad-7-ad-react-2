import repositoriesReducer, {
  Creators as RepositoriesActions,
} from '../../store/ducks/repositories';

describe('Repositories Reducer', () => {
  it('should be able to get repositories', () => {
    const state = repositoriesReducer(
      {},
      RepositoriesActions.getRepositoriesRequest()
    );

    expect(state.loading).toBe(true);
  });

  it('should return success on getting repositories', () => {
    const responseRepos = {
      data: [
        {
          id: 196301648,
          description: 'a repository to host a list of commom components',
          stargazers_count: 0,
          watchers_count: 0,
          language: 'JavaScript',
        },
      ],
      status: 200,
      statusText: 'OK',
      headers: {
        link:
          '<https://api.github.com/user/11710943/repos?sort=created&per_page=6&page=2>; rel="next", <https://api.github.com/user/11710943/repos?sort=created&per_page=6&page=2>; rel="last"',
      },
    };
    const responseUserProfile = {
      data: {
        login: 'VictorSales',
        id: 11710943,
        avatar_url: 'https://avatars0.githubusercontent.com/u/11710943?v=4',
        blog: 'www.teste.com',
        email: null,
      },
    };
    const pageIndex = 0;

    const state = repositoriesReducer(
      { data: [] },
      RepositoriesActions.getRepositoriesSuccess(
        responseRepos,
        responseUserProfile,
        pageIndex
      )
    );
    expect(state.loading).toBe(false);
    expect(state.error).toBe(false);
    expect(state.data.length).toBe(1);
  });

  it('should return failure on getting repositories', () => {
    const state = repositoriesReducer(
      {},
      RepositoriesActions.getRepositoriesFailure()
    );

    expect(state.loading).toBe(false);
    expect(state.error).toBe(true);
    expect(state.data).toStrictEqual([]);
  });

  it('should return default', () => {
    const oldState = { repo: 'test' };
    const state = repositoriesReducer(oldState, { type: 'teste', payload: {} });

    expect(state).toEqual(oldState);
  });
});
