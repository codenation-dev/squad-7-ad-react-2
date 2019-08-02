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
import '../../styles/react-paginate.css';

const Container = styled(_Container)`
  margin-top: 16px;
`;

const getProfile = repositories => {
  if (repositories.data.length) {
    const { login: name, avatar_url: avatarUrl } = repositories.data[0].owner;
    return {
      name,
      avatarUrl,
    };
  }
  return {};
};

const Main = ({ getRepositoriesRequest, repositories }) => {
  const onPageChange = pageIndex => {
    const pageNumber = pageIndex.selected + 1;
    getRepositoriesRequest(getProfile(repositories).name, pageNumber);
  };
  return (
    <Container>
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
              marginPagesDisplayed={1}
              pageRangeDisplayed={7}
              previousLabel={'anterior'}
              nextLabel={'próximo'}
              breakLabel={'...'}
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
    </Container>
  );
};

Main.propTypes = {
  getRepositoriesRequest: PropTypes.func.isRequired,
  repositories: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({})),
    loading: PropTypes.bool,
    pageCount: PropTypes.number,
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
