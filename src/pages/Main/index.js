import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styled from 'styled-components';
import { Column, Container as _Container, Row } from '../../components/grid';
import { Creators as RepositoriesActions } from '../../store/ducks/repositories';
import CardList from '../../components/cardList';
import UserAbout from '../../components/userAbout';
import Summary from '../../components/summary';
import {
  CardContent,
  CardHeader,
  StyledCard,
} from '../../components/card/style';

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

const Main = ({ repositories, summary }) => (
  <Container>
    <Row>
      <Column span="4">
        <UserAbout profile={getProfile(repositories)} />
        <Summary summary={summary} />
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
  summary: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const groupByYear = repos =>
  repos
    .map(repo => new Date(repo.created_at).getFullYear())
    .reduce((result, year, i, array) => {
      if (!result.find(item => item.year === year))
        result.push({
          year,
          count: array.reduce((sum, item) => {
            if (item === year) sum += 1;
            return sum;
          }, 0),
        });
      return result;
    }, []);

const mapStateToProps = state => ({
  repositories: state.repositories,
  summary: groupByYear(state.repositories.data),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
