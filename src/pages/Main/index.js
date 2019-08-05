import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { Creators as RepositoriesActions } from '../../store/ducks/repositories';

import SearchBar from '../../components/searchbar';

const Main = ({ getRepositoriesRequest, repositories, history }) => {
  const [username, setUsername] = useState('');
  const { loading } = repositories;

  const handleSubmit = e => {
    e.preventDefault();
    getRepositoriesRequest(username);
    setUsername('');
    history.push('/details');
  };

  return (
    <SearchBar
      onSubmit={handleSubmit}
      keyword={username}
      onChange={e => setUsername(e.target.value)}
      isLoading={loading}
      text="github.com/"
    />
  )
}

Home.propTypes = {
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
)(Main));