import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { Container, Title, Subtitle } from './style';
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
    <Container>
      <Title>GITDISCOVERY</Title>
      <Subtitle>Explore os repositórios dos usuários de forma simples</Subtitle>
      <SearchBar
        onSubmit={handleSubmit}
        keyword={username}
        onChange={e => setUsername(e.target.value)}
        isLoading={loading}
        text="github.com/"
        internal={true}
      />
    </Container>
  )
}

Main.propTypes = {
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