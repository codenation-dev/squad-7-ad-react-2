import React from 'react';
import PropTypes from 'prop-types';
import CardItem from '../cardItem';

const CardList = ({ repositories }) => {
  const cardList = repositories.map(repository => (
    <CardItem key={repository.title} repository={repository} />
  ));
  return <div>{cardList}</div>;
};

CardList.propTypes = {
  repositories: PropTypes.instanceOf(Array),
};

CardList.defaultProps = {
  repositories: [],
};

export default CardList;
