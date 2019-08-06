import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link as _Link, withRouter } from 'react-router-dom';

import { Creators as RepositoriesActions } from '../../store/ducks/repositories';
import { Nav, Logo, Container } from './style';
import SearchBar from '../searchbar';

const Link = styled(_Link)`
  text-decoration: none;
`

const NavBar = ({ getRepositoriesRequest, history }) => {
  const [username, setUsername] = useState('');
  const pathname = history.location.pathname;

  const handleSubmit = e => {
    e.preventDefault();
    getRepositoriesRequest(username);
    setUsername('');
  };

  const renderSearch = () => pathname != '/' ? <SearchBar
    onSubmit={handleSubmit}
    keyword={username}
    onChange={e => setUsername(e.target.value)}
    text="github.com/" />
    : null;

  return (
    <Nav>
      <Container>
        <Link to="/">
          <Logo>Squad7</Logo>
        </Link>
        {renderSearch()}
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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar));
