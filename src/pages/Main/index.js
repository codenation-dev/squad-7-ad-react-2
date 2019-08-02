import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container, Row, Column } from '../../components/grid';
import { Creators as RepositoriesActions } from '../../store/ducks/repositories';
import CardList from '../../components/cardList';

const Main = ({ repositories }) => (
  <Container fluid>
    <Row>
      <Column span="12">
        <CardList repositories={repositories.data} error={repositories.error} />
      </Column>
    </Row>
  </Container>
);

Main.propTypes = {
  repositories: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({})),
    error: PropTypes.bool,
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
