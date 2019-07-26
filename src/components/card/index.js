import React from 'react';
import PropTypes from 'prop-types';
import CardList from '../cardList';
import { StyledCard, CardHeader, CardContent } from './style';
import repositories from '../../sample_data/repositories.json';

const Card = ({ title }) => {
  return (
    <StyledCard>
      <CardHeader>{title}</CardHeader>
      <CardContent>
        <CardList repositories={repositories} />
      </CardContent>
    </StyledCard>
  );
};

Card.propTypes = {
  title: PropTypes.string,
};

Card.defaultProps = {
  title: 'REPOSITÓRIOS',
};

export default Card;
