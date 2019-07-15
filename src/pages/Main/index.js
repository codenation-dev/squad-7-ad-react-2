import React from 'react';

import { connect } from 'react-redux';

import Repository from '../../components/repository';

// import { bindActionCreators } from 'redux';
// import { Creators as RepositoryActions } from '../../store/ducks/repositories';

// import { Container } from './styles';

const Main = props =>
  props.repositories.map(repository => <Repository {...repository} />);

const mapStateToProps = state => ({
  repositories: state.repositories,
});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Main);
