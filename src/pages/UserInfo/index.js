import React,{ useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactPaginate from 'react-paginate';

import { Column, Row } from '../../components/grid';
import { Creators as RepositoriesActions } from '../../store/ducks/repositories';
import CardList from '../../components/cardList';
import UserAbout from '../../components/userAbout';
import Summary from '../../components/summary';
import { CardContent, CardHeader, StyledCard } from '../../components/card';
import MessageNotFound from '../../components/messageNotFound';
import '../../styles/react-paginate.css';
import { Spinner } from '../../components/searchbar/style';
import { WrapperLoading, Container } from './style';
import CardLink from '../../components/cardLink';

const getProfile = repositories => {
  let profile = {};
  if (repositories.username)
    profile = {
      username: repositories.username,
      avatarUrl: repositories.avatarUrl,
      email: repositories.email,
      blog: repositories.blog,
    };
  return profile;
};

const getLanguages = repositories => {
  if (repositories.data.length) {
    const languages = repositories.data
      .map(repository => repository.language)
      .filter(language => !!language)
      .sort();

    return ['Todos', ...new Set(languages)];
  }

  return ['Todos'];
};

const filterRepositories = (repositories, menuActive) => {
  if (menuActive === 'Todos') {
    return repositories.data;
  }

  return repositories.data.filter(
    repository => repository.language === menuActive
  );
};

const Main = ({ getRepositoriesRequest, repositories, summary }) => {
  const [menuActive, setMenuActive] = useState('Todos');
  const { loading } = repositories;

  const onPageChange = pageIndex => {
    const pageNumber = pageIndex.selected + 1;
    getRepositoriesRequest(repositories.username, pageNumber);
  };

  const renderLoading = () => (
    <WrapperLoading>
      <Spinner height="55" />
    </WrapperLoading>
  )

  const repositoriesFiltered = filterRepositories(repositories, menuActive);
  const renderContent = () => repositories.error ? (
      <MessageNotFound />
    ) : (
      <Row>
        <Column span="4">
          <UserAbout profile={getProfile(repositories)} />
          {summary.length > 0 && <Summary summary={summary} />}
          <StyledCard>
            <CardHeader>LINGUAGENS</CardHeader>
            <CardContent>
              {getLanguages(repositories).map((language, idx) => (
                <CardLink
                  key={idx}
                  title={language}
                  isActive={menuActive === language}
                  handleClick={() => setMenuActive(language)}
                />
              ))}
            </CardContent>
          </StyledCard>
        </Column>

        <Column span="8">
          <StyledCard>
            <CardHeader>REPOSITÓRIOS</CardHeader>
            <CardContent>
              <CardList repositories={repositoriesFiltered} />
            </CardContent>
          </StyledCard>
          {repositories.data.length > 0 && repositories.pageCount > 0 ? (
            <ReactPaginate
              onPageChange={onPageChange}
              pageCount={repositories.pageCount}
              forcePage={repositories.pageIndex}
              marginPagesDisplayed={1}
              pageRangeDisplayed={7}
              previousLabel="anterior"
              nextLabel="próximo"
              breakLabel="..."
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              breakClassName="page-item"
              pageClassName="page-item"
              previousClassName="page-item"
              nextClassName="page-item"
              pageLinkClassName="page-link"
              previousLinkClassName="page-link"
              nextLinkClassName="page-link"
            />
          ) : null}
        </Column>
      </Row>
    )


  return (
    <Container>
      { loading ? renderLoading() : renderContent() }
    </Container>
  );
};

Main.propTypes = {
  getRepositoriesRequest: PropTypes.func.isRequired,
  repositories: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({})),
    loading: PropTypes.bool,
    pageCount: PropTypes.number,
    pageIndex: PropTypes.number,
    error: PropTypes.bool,
    username: PropTypes.string,
    avatarUrl: PropTypes.string,
    email: PropTypes.string,
    blog: PropTypes.string,
  }).isRequired,
  summary: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const groupByYear = repos =>
  repos
    .map(repo => new Date(repo.created_at).getFullYear())
    .reduce((result, year, i, array) => {
      if (!result.find(item => item.year === year))
        result.push({
          year,
          count: array.reduce((sum, item) => {
            if (item === year) sum += 1;
            return sum;
          }, 0),
        });
      return result;
    }, []);

const mapStateToProps = state => ({
  repositories: state.repositories,
  summary: groupByYear(state.repositories.data),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
