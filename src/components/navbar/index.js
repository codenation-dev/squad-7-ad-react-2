import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as RepositoriesActions } from '../../store/ducks/repositories';
import { Container as _Container } from '../grid';
import { Nav, Logo } from './style';
import SearchBar from '../searchbar';

const Container = styled(_Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
`;

const NavBar = ({ getRepositoriesRequest, repositories }) => {
  const [username, setUsername] = useState('');
  const { loading } = repositories;

  const handleSubmit = e => {
    e.preventDefault();
    getRepositoriesRequest(username);
  };

  return (
    <Nav>
      <Container>
        <Logo>Squad7</Logo>
        <SearchBar
          onSubmit={handleSubmit}
          keyword={username}
          onChange={e => setUsername(e.target.value)}
          isLoading={loading}
        />
      </Container>
    </Nav>
  );
};

NavBar.propTypes = {
  getRepositoriesRequest: PropTypes.func.isRequired,
  repositories: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({})),
    loading: PropTypes.bool,
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
)(NavBar);
