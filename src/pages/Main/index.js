import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Repository from '../../components/repository';
import { Container, Row, Column } from '../../components/grid';
import { Creators as RepositoriesActions } from '../../store/ducks/repositories';

class Main extends Component {
  state = {
    username: '',
  };

  handleSubmit = e => {
    const { getRepositoriesRequest } = this.props;
    const { username } = this.state;
    e.preventDefault();
    getRepositoriesRequest(username);
  };

  render() {
    const { username } = this.state;
    const { repositories } = this.props;
    const { data, loading } = repositories;
    return (
      <Container fluid>
        <Row>
          <Column span="12">
            {data.map(repository => (
              <Repository key={repository.id} {...repository} />
            ))}
          </Column>
        </Row>
      </Container>
    );
  }
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
