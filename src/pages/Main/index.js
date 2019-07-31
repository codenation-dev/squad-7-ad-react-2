import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styled from 'styled-components';
import { Column, Container as _Container, Row } from '../../components/grid';
import { Creators as RepositoriesActions } from '../../store/ducks/repositories';
import CardList from '../../components/cardList';
import UserAbout from '../../components/userAbout';
import {
  CardContent,
  CardHeader,
  StyledCard,
} from '../../components/card/style';

const Container = styled(_Container)`
  margin-top: 16px;
`;

const userMock = {
  avatar_url: 'https://avatars2.githubusercontent.com/u/42302?v=4',
  name: 'User Name',
};

const Main = ({ repositories }) => (
  <Container>
    <Row>
      <Column span="4">
        <UserAbout profile={userMock} />
      </Column>

      <Column span="8">
        <StyledCard>
          <CardHeader>REPOSITÓRIOS</CardHeader>
          <CardContent>
            <CardList repositories={repositories.data} />
          </CardContent>
        </StyledCard>
      </Column>
    </Row>
  </Container>
);

Main.propTypes = {
  repositories: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({})),
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
