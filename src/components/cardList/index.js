import React from 'react';
import PropTypes from 'prop-types';
import CardItem from '../cardItem';

const CardList = ({ repositories }) =>
  repositories.length > 0 &&
  repositories
    .map(repository => (
      <CardItem key={repository.id} repository={repository} />
    ));

CardList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
  error: PropTypes.bool.isRequired,
};

CardList.defaultProps = {
  repositories: [],
};

export default CardList;
