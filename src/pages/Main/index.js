import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactPaginate from 'react-paginate';

import styled from 'styled-components';
import { Column, Container as _Container, Row } from '../../components/grid';
import { Creators as RepositoriesActions } from '../../store/ducks/repositories';
import CardList from '../../components/cardList';
import UserAbout from '../../components/userAbout';
import { CardContent, CardHeader, StyledCard } from '../../components/card';
import MessageNotFound from '../../components/messageNotFound';
import '../../styles/react-paginate.css';

const Container = styled(_Container)`
  margin-top: 16px;
`;

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

const Main = ({ getRepositoriesRequest, repositories }) => {
  const onPageChange = pageIndex => {
    const pageNumber = pageIndex.selected + 1;
    getRepositoriesRequest(repositories.username, pageNumber);
  };
  return (
    <Container>
      {repositories.error ? (
        <MessageNotFound />
      ) : (
        <Row>
          <Column span="4">
            <UserAbout profile={getProfile(repositories)} />
          </Column>
          <Column span="8">
            <StyledCard>
              <CardHeader>REPOSITÓRIOS</CardHeader>
              <CardContent>
                <CardList repositories={repositories.data} />
              </CardContent>
            </StyledCard>
            {repositories.data.length > 0 ? (
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
      )}
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
  }).isRequired,
};

const mapStateToProps = state => ({
  repositories: state.repositories,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
